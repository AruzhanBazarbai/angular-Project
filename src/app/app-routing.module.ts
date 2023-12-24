import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'login',
  component: LoginComponent, 
},
{
  path: 'registration',
  component: RegistrationComponent, 
},
{
  path: 'product-detail/:id',
  component: ProductDetailComponent
},
{
  path: '',
  redirectTo: 'home', 
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent, 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
