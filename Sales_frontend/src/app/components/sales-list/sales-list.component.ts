import { Component,OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit{
  salesData: any[] = [];
  isLoading = true;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSalesData();
  }

  loadSalesData(): void {
    this.salesService.getSalesData().subscribe(
      (data) => {
        this.salesData = data;
        this.isLoading = false;
        console.log('Sales Data:', this.salesData);
      },
      (error) => {
        console.error('Error fetching sales data', error);
        this.isLoading = false;
      }
    );
  }
}
