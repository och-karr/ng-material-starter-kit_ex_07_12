import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListRoutingComponent } from './components/filtered-product-list-routing/filtered-product-list-routing.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import { FilteredProductListRoutingComponentModule } from './components/filtered-product-list-routing/filtered-product-list-routing.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListRoutingComponent }, { path: 'products', component: FilteredProductListSubjectComponent }]), FilteredProductListRoutingComponentModule, CategoryServiceModule, FilteredProductListSubjectComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
