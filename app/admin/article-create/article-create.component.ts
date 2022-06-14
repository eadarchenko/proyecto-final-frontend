import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public service: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required]),
      photo: new FormControl('', Validators.required),
      content:new FormControl('', Validators.required)
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

