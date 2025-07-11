import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesService } from 'src/app/services/sales.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit{
  salesForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
    private salesService: SalesService // Inject the service
  ) { }

  ngOnInit(): void {
    this.salesForm = this.fb.group({
      productName: ['', Validators.required],
      noOfUnits: [0, [Validators.required, Validators.min(1)]],
      pricePerUnit: [0, [Validators.required, Validators.min(1)]],
      salesAmount: [{ value: '', disabled: true }],
      salesDate: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.calculateSalesAmount();
  }

  calculateSalesAmount() {
    this.salesForm.get('noOfUnits')?.valueChanges.subscribe(() => this.updateSalesAmount());
    this.salesForm.get('pricePerUnit')?.valueChanges.subscribe(() => this.updateSalesAmount());
  }

  updateSalesAmount() {
    const units = this.salesForm.get('noOfUnits')?.value || 0;
    const price = this.salesForm.get('pricePerUnit')?.value || 0;
    const amount = units * price;
    this.salesForm.get('salesAmount')?.setValue(amount);
  }
  onSubmit(): void {
    if (this.salesForm.valid) {
      this.salesForm.get('salesAmount')?.enable();
      const formData = this.salesForm.value;
      
  
      // Calling the service to send form data to the backend
      this.salesService.createSales(formData).subscribe(
        response => {
          console.log('Sales data successfully saved', response);
          // Handle success response
          this.formSubmitted = true;
          this.salesForm.reset();
          this.salesForm.patchValue({ salesAmount: null });
        },
        error => {
          console.error('Error saving sales data', error);
          // Handle error response
        }
      );
    } else {
      console.log('Form is invalid');
    }
    setTimeout(() => {
      this.formSubmitted = false;
    }, 3000);
  }  
}