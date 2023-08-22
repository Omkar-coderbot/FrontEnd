import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.model';
import { FormsModule,AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators, } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user:User=new User() ;
  submittedData:any;
  userForm = new UntypedFormGroup(
    {
      firstName: new UntypedFormControl(''),
      lastName: new UntypedFormControl(''),
      email: new UntypedFormControl(''),
    })

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.refreshList()
  }

refreshList(){
  this.userService.getUser().subscribe(res=>{
    this.submittedData=res;
    console.log(this.submittedData)
  })
}

  onSubmit() {
    console.log(this.userForm.value.email)
 debugger
    this.user.Email=this.userForm.value.email;
    this.user.FirstName=this.userForm.value.firstName;
    this.user.LastName=this.userForm.value.lastName;
    debugger;
    // Save user data using the UserService
    
    this.userService.saveUser(this.user).subscribe(res=>{
      alert("User Added Successfully ! ");
      console.log(this.user);
      this.refreshList();

    })
    
  }

 
}
