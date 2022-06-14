import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ShoppPageComponent } from './shop/shopp-page/shopp-page.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductPageComponent } from './shop/product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleComponent } from './admin/article/article.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ArticleCreateComponent } from './admin/article-create/article-create.component';

const routes: Routes = [
  //rutas admin pages
  {path:'admin',component:AdminPanelComponent},
  {path:'admin-articles',component:ArticleComponent},
  {path:'admin-products',component:ProductComponent},
  {path:'admin-productEdit',component:ProductEditComponent},
  {path:'admin-articleEdit',component:ArticleEditComponent},
  {path:'admin-productCreate',component:ProductCreateComponent},
  {path:'admin-articleCreate',component:ArticleCreateComponent},
  //rutas pag princicap
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'shop-page',component:ShoppPageComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'products/:productId',component:ProductPageComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
