import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { HotToastModule } from '@ngneat/hot-toast';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServiciosComponent } from './servicios/servicios.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { ShoppPageComponent } from './shop/shopp-page/shopp-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductPageComponent } from './shop/product-page/product-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BtnplusminusComponent } from './shop/btnplusminus/btnplusminus.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleCreateComponent } from './admin/article-create/article-create.component';
import { ArticleComponent } from './admin/article/article.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductComponent } from './admin/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    ShoppingCartComponent,
    ShoppPageComponent,
    FooterComponent,
    AboutUsComponent,
    ProductPageComponent,
    BlogComponent,
    BtnplusminusComponent,
    AdminPanelComponent,
    ProductEditComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    ArticleComponent,
    ProductCreateComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    CarouselModule,
    MatStepperModule,
    HotToastModule.forRoot(),
      NgbModule
  ],
  providers:  [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
