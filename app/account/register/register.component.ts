import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register:any = FormGroup;
  id:any =4;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private commServ: CommonService
  ) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })
  }

  registerSubmit(data:any){
    let dataToPass= {
      name:data.name,
      lastname:data.lastname,
      email:data.email,
      password:data.password,
      id:this.id++
    }
    this.commServ.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data)
    })

  }
  gotoLogin(){
    this.router.navigate(['login'])
  }
}
