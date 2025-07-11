import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SalesService } from 'src/app/services/sales.service';
type ChartType = 'bar' | 'line' | 'pie'; // <<< Define manually Defines a TypeScript union type to restrict chart types to just 'bar', 'line', or 'pie'.

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  Highchart = Highcharts;  //Highcharts accessible inside the component’s template for rendering charts.

  graphTypes: string[] = ['Bar', 'Line', 'Pie']; // UI options

  columns: string[] = ['productName', 'city', ]; // X-axis (string fields)
  numericColumns: string[] = ['noOfUnits', 'salesAmount']; // Y-axis (number fields)

  selectedGraphType: ChartType = 'line'; // <<< Use correct type
  selectedXAxis = 'productName';
  selectedYAxis = 'salesAmount';

  chartOptions: Highcharts.Options = {};
  constructor(private salesService: SalesService) {}

  salesData: { [key: string]: any }[] = [
    ];

  ngOnInit():void{
    this.salesService.getSalesData().subscribe(response=>{
      this.salesData = response;
    });

    this.updateChart();
  }

  updateChart() {
    // const xData = Array.from(new Set(this.salesData.map(item => item[this.selectedXAxis])));
    // console.log(xData)
    // const yData = this.salesData.map(item => item[this.selectedYAxis]);
    // console.log(yData)
    // console.log(this.salesData)


    const groupMap = new Map<string, number>();

    for (const item of this.salesData) {
      const xValue = item[this.selectedXAxis];
      const yValue = Number(item[this.selectedYAxis]);
  
      if (groupMap.has(xValue)) {
        groupMap.set(xValue, groupMap.get(xValue)! + yValue);
      } else {
        groupMap.set(xValue, yValue);
      }
    }
  
    const xData = Array.from(groupMap.keys());
    const yData = Array.from(groupMap.values());

    // If Pie chart selected
    if (this.selectedGraphType === 'pie') {
      this.chartOptions = {
        chart: { type: 'pie' },
        title: { text: `${this.selectedYAxis} Distribution` },
        series: [{
          type: 'pie',
          name: `${this.selectedYAxis}`,
          data: Array.from(groupMap.entries()).map(([name, value]) => ({
            name,
            y: value 
          }))
        }]
      };
    } else {
      // For Column, Bar, Line
      this.chartOptions = {
        chart: {
          type: this.selectedGraphType
        },
        title: {
          text: `${this.selectedYAxis} vs ${this.selectedXAxis}`
        },
        xAxis: {
          categories: xData,
          title: { text: this.selectedXAxis }
        },
        yAxis: {
          title: { text: this.selectedYAxis }
        },
        series: [{
          type: this.selectedGraphType,
          name: this.selectedYAxis,
          data: yData
        }]
      };
    }
  }
}
