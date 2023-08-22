import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormsModule,AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators, } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product:Product=new Product() ;

  submittedData:any;

  productForm = new UntypedFormGroup(
    {
      productName: new UntypedFormControl(''),
      price: new UntypedFormControl(''),
      quantity: new UntypedFormControl(''),
    })
  
  constructor(private productService: ProductService) {
    this.refreshList()
  }
  ngOnInit(): void {
    this.refreshList()
  }

refreshList(){
  this.productService.getProduct().subscribe(res=>{
    this.submittedData=res;
    console.log(this.submittedData)
  })
}
  onSubmit() {
    this.productService.saveProduct(this.product);
    this.product.Name=this.productForm.value.productName;
    this.product.Price=this.productForm.value.price;
    this.product.Quantity=this.productForm.value.quantity;

    // Save user data using the UserService
    
    this.productService.saveProduct(this.product).subscribe(res=>{
      console.log(this.product);
       this.refreshList();
   
    })
    
  }

 

}
