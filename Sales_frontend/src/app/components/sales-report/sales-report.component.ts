import { Component,OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit{
  selectedReportType: string = 'leadingProductBySalesAmount'; // Default to Sales Amount report
  leadingProductBySalesAmount: any[] = [];
  leadingProductByUnitsSold: any[] = [];
  leadingProductByCity: any[] = [];
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    // Initial load of data based on default report type
    this.loadSalesData();
  }

  loadSalesData(): void {
    this.loading = true;
    this.errorMessage = null;

    // Based on selected report type, call the corresponding API method
    switch (this.selectedReportType) {
      case 'leadingProductBySalesAmount':
        this.salesService.getLeadingProductBySalesAmount().subscribe(
          (data) => {
            this.leadingProductBySalesAmount = this.transformProductData(data);
            console.log(this.leadingProductBySalesAmount)
            this.loading = false;
          },
          (error) => {
            console.error("Error fetching leading product by sales amount", error);
            this.errorMessage = 'Error fetching leading product by sales amount';
            this.loading = false;
          }
        );
        break;

      case 'leadingProductByUnitsSold':
        this.salesService.getLeadingProductByUnitsSold().subscribe(
          (data) => {
            this.leadingProductByUnitsSold = this.transformProductData(data);
            this.loading = false;
          },
          (error) => {
            console.error("Error fetching leading product by units sold", error);
            this.errorMessage = 'Error fetching leading product by units sold';
            this.loading = false;
          }
        );
        break;

      case 'leadingProductByCity':
        this.salesService.getLeadingProductByCity().subscribe(
          (data) => {
            this.leadingProductByCity = this.transformCityData(data); // Process city data
            this.loading = false;
          },
          (error) => {
            console.error("Error fetching leading product by city", error);
            this.errorMessage = 'Error fetching leading product by city';
            this.loading = false;
          }
        );
        break;

      default:
        break;
    }
  }

  // Transform city data into an array for table rendering
  transformCityData(cityData: any): any[] {
    return Object.keys(cityData).map((city) => ({
      city: city,
      productName: cityData[city].productName,
      noOfUnits: cityData[city].noOfUnits,
      salesAmount: cityData[city].salesAmount,
    }));
  }

  transformProductData(productData: any): any[] {
    // If productData is an array, return as it is
    if (Array.isArray(productData)) {
      return productData;
    }
    // If productData is a single object, wrap it in an array
    return [productData];
  }
  
}