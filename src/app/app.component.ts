import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omkarproject';
 
  constructor(private router:Router){}
  
  UserComponent(){
    this.router.navigateByUrl('user')
  }
  ProductComponent(){
    this.router.navigateByUrl('product')
  }
}
