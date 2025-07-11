import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';


@Component({
  selector: 'app-sales-analytics',
  templateUrl: './sales-analytics.component.html',
  styleUrls: ['./sales-analytics.component.css']
})
export class SalesAnalyticsComponent implements OnInit{
  salesData: any[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSalesData();
  }

  loadSalesData() {
    this.salesService.getSalesData().subscribe(
      (data) => {
        this.salesData = data;
        this.calculateAnalytics(); // After loading data, calculate analytics
      },
      (error) => {
        console.error('Error fetching sales data', error);
      }
    );
  }
  totalSalesAmount = 0;
  totalUnitsSold = 0;
  averageSalesPrice = 0;
  topProduct = 0;

  calculateAnalytics() {
    if (this.salesData.length > 0) {
      this.totalSalesAmount = this.salesData.reduce((sum, sale) => sum + sale.salesAmount, 0);
      this.totalUnitsSold = this.salesData.reduce((sum, sale) => sum + sale.noOfUnits, 0);
      this.averageSalesPrice = this.salesData.reduce((sum, sale) => sum + sale.pricePerUnit, 0) / this.salesData.length;
    }
  }
}
