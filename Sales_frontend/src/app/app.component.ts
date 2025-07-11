import { Component,OnInit } from '@angular/core';
import { SalesService } from './services/sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sales Management App';
  showForm = true;
  showAnalytics = false;
  showSalesReport = false;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadSalesData();
  }

  showFormView(): void {
    this.showForm = true;
  }

  showListView(): void {
    this.showForm = false;
  }


  // Function to toggle the Sales Analytics view
  showAnalyticsView() {
    this.showAnalytics = !this.showAnalytics;
    this.showForm = false;  // Hide form view when analytics is shown
  }

  loadSalesData(): void {
    this.salesService.getSalesData().subscribe(
      (data) => {
        console.log('Sales data loaded', data);
      },
      (error) => {
        console.error('Error fetching sales data', error);
      }
    );
  }
}
