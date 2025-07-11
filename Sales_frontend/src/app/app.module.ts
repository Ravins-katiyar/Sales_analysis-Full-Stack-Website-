import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesFormComponent } from './components/sales-form/sales-form.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SalesAnalyticsComponent } from './components/sales-analytics/sales-analytics.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { GraphsComponent } from './components/graphs/graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesFormComponent,
    SalesListComponent,
    SalesAnalyticsComponent,
    SalesReportComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
