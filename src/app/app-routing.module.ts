import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { ReportProductComponent } from './report-product/report-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
  { path: 'Products', component: ProductsListComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'RemoveProduct', component: RemoveProductComponent },
  { path: 'ReportProduct', component: ReportProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
