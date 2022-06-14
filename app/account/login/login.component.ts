import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any = FormGroup;
  users:any = []


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commserv: CommonService
    ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
    })

    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data;
    })
  }

  loginSubmit(data:any){
    if(data.email){
      this.users.forEach((item:any ) => {
        if(item.email === data.email && item.password === data.password){

          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['homelogin'])
        }
        else{
          localStorage.clear()

        }
      });
    }
  }

  goToSingup(){

    this.router.navigate(['register'])
  }
}
