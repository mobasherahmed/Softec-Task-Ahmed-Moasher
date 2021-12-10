import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public red_border: boolean = false;
  public checkOutItems: any[] = [];
  public checkoutForm: FormGroup = this.fb.group({});
  public submitted = false;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  
  ngOnInit() {
    let cartItems:any = localStorage.getItem('orders')
   if(cartItems){
     this.checkOutItems = JSON.parse(cartItems);
   }
  }

  createForm() {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      this.red_border = true;
      return;
    }
  }

  public getTotal(){
    return this.checkOutItems.reduce((prev, curr) => {
      return prev + curr.ProductPrice * curr.Count;
    }, 0);
  }



}
