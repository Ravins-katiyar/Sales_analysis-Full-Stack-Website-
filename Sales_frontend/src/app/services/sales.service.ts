import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// The ? makes the id optional. This means: 
// The Sales object may or may not have an id property.
interface Sales {                    
  id?: number;
  productName: string;
  noOfUnits: number;
  price: number;
  salesAmount: number;
  salesDate: string;
  city: string;
}

// Angular will register this service with the root injector.
// A single instance of the service will be shared across the entire application (singleton).
// You can inject this service into any component, directive, pipe, or another service in the app.
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private apiUrl = 'http://localhost:8080/api/sales'; // Backend API URL
  private analyticsUrl = 'http://localhost:8080/api/sales/analytics'; // Backend API URL for analytics


// constructor(...)	->>  Initializes the class when created.
// private http: HttpClient  ->>	Declares a class variable http and injects HttpClient into it.
// HttpClient	 ->>   Angular’s built-in service for HTTP communication.
  constructor(private http: HttpClient) { }

  // Method to send sales data to the backend (via POST request)
  // Its return type is Observable<any>, meaning it returns a stream of data you can subscribe to
  createSales(salesData: any): Observable<any> {      
    return this.http.post(this.apiUrl, salesData);
  }

  // Method to get sales data from the backend (via GET request)
  getSalesData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  //get<Sales> ->> generic type telling TypeScript to expect a response matching the Sales interface.
  getSalesById(id: number): Observable<Sales> {
    return this.http.get<Sales>(`${this.apiUrl}/${id}`);  
  }
  //Observables handle responses from HttpClient methods like get(), post()
  getLeadingProductBySalesAmount(): Observable<any> {
    return this.http.get<any>(`${this.analyticsUrl}/leadingProductBySalesAmount`);
  }
   //   APIs take time to respond, and JavaScript doesn't wait. So, Angular uses Observables (from RxJS) to:
   //   Handle data when it arrives.
   //   Avoid blocking the UI or app flow.
   //   React to events/data streams.
   //   Instead of returning the data immediately, you return an Observable, which emits data later, once the HTTP call completes.
  getLeadingProductByUnitsSold(): Observable<any> {
    return this.http.get<any>(`${this.analyticsUrl}/leadingProductByUnitsSold`);
  }
  getLeadingProductByCity(): Observable<any> {
    return this.http.get<any>(`${this.analyticsUrl}/leadingProductByCity`);
  }
}
