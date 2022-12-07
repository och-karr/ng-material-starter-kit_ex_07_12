import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListRoutingComponent } from './components/filtered-product-list-routing/filtered-product-list-routing.component';
import { FilteredProductListRoutingComponentModule } from './components/filtered-product-list-routing/filtered-product-list-routing.component-module';
import { CategoryServiceModule } from './services/category.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListRoutingComponent }]), FilteredProductListRoutingComponentModule, CategoryServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
