import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListRoutingComponent } from './components/filtered-product-list-routing/filtered-product-list-routing.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { FilteredProductListRoutingComponentModule } from './components/filtered-product-list-routing/filtered-product-list-routing.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListRoutingComponent }, { path: 'products', component: FilteredProductListSubjectComponent }, { path: 'sorted-products', component: SortedProductListComponent }]), FilteredProductListRoutingComponentModule, CategoryServiceModule, FilteredProductListSubjectComponentModule, ProductServiceModule, SortedProductListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
