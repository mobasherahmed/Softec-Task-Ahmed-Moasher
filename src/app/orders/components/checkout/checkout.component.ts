import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder,private _orderService:OrdersService,private router:Router) {
    this.createForm();
  }
  
  ngOnInit() {
    let cartItems:any = localStorage.getItem('cartItems')
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
    let item = {
      GUID : this.createGUID(),
      shippingDetails: this.checkoutForm.value,
      products:this.checkOutItems,
      totalAmount : this.getTotal(),
      creationDate:new Date()
    }
    console.log("itemOrder",item);
    
    this._orderService.createOrder(item)
  }

  createGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
 
   getTotal(){
    return this.checkOutItems.reduce((prev, curr) => {
      return prev + curr.ProductPrice * curr.Count;
    }, 0);
  }



}
