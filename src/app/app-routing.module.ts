import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  FilteredProductListRoutingComponent
} from './components/filtered-product-list-routing/filtered-product-list-routing.component';
import {
  FilteredProductListSubjectComponent
} from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import {SortedProductListComponent} from './components/sorted-product-list/sorted-product-list.component';
import {SortedEmployeeListComponent} from './components/sorted-employee-list/sorted-employee-list.component';
import {FilteredBeerListComponent} from './components/filtered-beer-list/filtered-beer-list.component';
import {ProductListWithDeleteComponent} from './components/product-list-with-delete/product-list-with-delete.component';
import {
  FilteredProductListRoutingComponentModule
} from './components/filtered-product-list-routing/filtered-product-list-routing.component-module';
import {CategoryServiceModule} from './services/category.service-module';
import {
  FilteredProductListSubjectComponentModule
} from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {SortedProductListComponentModule} from './components/sorted-product-list/sorted-product-list.component-module';
import {
  SortedEmployeeListComponentModule
} from './components/sorted-employee-list/sorted-employee-list.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {FilteredBeerListComponentModule} from './components/filtered-beer-list/filtered-beer-list.component-module';
import {BeerServiceModule} from './services/beer.service-module';
import {
  ProductListWithDeleteComponentModule
} from './components/product-list-with-delete/product-list-with-delete.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products/:category',
    component: FilteredProductListRoutingComponent
  }, {path: 'products', component: FilteredProductListSubjectComponent}, {
    path: 'sorted-products',
    component: SortedProductListComponent
  }, {path: 'sorted-employees', component: SortedEmployeeListComponent}, {
    path: 'beers-with-pagination',
    component: FilteredBeerListComponent
  }, {
    path: 'refresh-products',
    component: ProductListWithDeleteComponent
  }]), FilteredProductListRoutingComponentModule, CategoryServiceModule, FilteredProductListSubjectComponentModule, ProductServiceModule, SortedProductListComponentModule, SortedEmployeeListComponentModule, EmployeeServiceModule, FilteredBeerListComponentModule, BeerServiceModule, ProductListWithDeleteComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
