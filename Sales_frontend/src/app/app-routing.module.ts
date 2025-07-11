import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesReportComponent } from './components/sales-report/sales-report.component'; // Correct import for SalesReportComponent
import { SalesFormComponent } from './components/sales-form/sales-form.component';  // Add New Sale
import { SalesListComponent } from './components/sales-list/sales-list.component';  // View Sales List
import { SalesAnalyticsComponent } from './components/sales-analytics/sales-analytics.component'; // Sales Table Analytics
import { GraphsComponent } from './components/graphs/graphs.component';




const routes: Routes = [
  { path: 'sales-form', component: SalesFormComponent },  // Add New Sale
  { path: 'sales-list', component: SalesListComponent },  // View Sales List
  { path: 'sales-analytics', component: SalesAnalyticsComponent },  // Sales Table Analytics
  { path: 'sales-report', component: SalesReportComponent },
  { path: 'graphs', component: GraphsComponent},
  { path: '', redirectTo: '/sales-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
