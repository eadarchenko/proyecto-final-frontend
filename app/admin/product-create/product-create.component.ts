import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public service: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      introduction:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required),

    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.service.createArticle(this.form.value).subscribe(res => {
         console.log('Article created successfully!');
         this.router.navigateByUrl('../admin-article');
    })
  }

}
