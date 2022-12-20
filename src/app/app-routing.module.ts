import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListRoutingComponent } from './components/filtered-product-list-routing/filtered-product-list-routing.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { SortedEmployeeListComponent } from './components/sorted-employee-list/sorted-employee-list.component';
import { FilteredBeerListComponent } from './components/filtered-beer-list/filtered-beer-list.component';
import { ProductListWithDeleteComponent } from './components/product-list-with-delete/product-list-with-delete.component';
import { EmployeeListWithDeleteComponent } from './components/employee-list-with-delete/employee-list-with-delete.component';
import { ProductMasterDetailsComponent } from './components/product-master-details/product-master-details.component';
import { EmployeeMasterDetailsComponent } from './components/employee-master-details/employee-master-details.component';
import { CryptoCurrencyMasterDetailsComponent } from './components/crypto-currency-master-details/crypto-currency-master-details.component';
import { FilteredProductListRoutingComponentModule } from './components/filtered-product-list-routing/filtered-product-list-routing.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { SortedEmployeeListComponentModule } from './components/sorted-employee-list/sorted-employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { FilteredBeerListComponentModule } from './components/filtered-beer-list/filtered-beer-list.component-module';
import { BeerServiceModule } from './services/beer.service-module';
import { ProductListWithDeleteComponentModule } from './components/product-list-with-delete/product-list-with-delete.component-module';
import { EmployeeListWithDeleteComponentModule } from './components/employee-list-with-delete/employee-list-with-delete.component-module';
import { ProductMasterDetailsComponentModule } from './components/product-master-details/product-master-details.component-module';
import { EmployeeMasterDetailsComponentModule } from './components/employee-master-details/employee-master-details.component-module';
import { CryptoCurrencyMasterDetailsComponentModule } from './components/crypto-currency-master-details/crypto-currency-master-details.component-module';
import { CryptoCurrencyServiceModule } from './services/crypto-currency.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products/:category', component: FilteredProductListRoutingComponent }, { path: 'products', component: FilteredProductListSubjectComponent }, { path: 'sorted-products', component: SortedProductListComponent }, { path: 'sorted-employees', component: SortedEmployeeListComponent }, { path: 'beers-with-pagination', component: FilteredBeerListComponent }, { path: 'refresh-products', component: ProductListWithDeleteComponent }, { path: 'refresh-employees', component: EmployeeListWithDeleteComponent }, { path: 'products-master-details', component: ProductMasterDetailsComponent }, { path: 'employees-master-details', component: EmployeeMasterDetailsComponent }, { path: 'crypto-master-details', component: CryptoCurrencyMasterDetailsComponent }]), FilteredProductListRoutingComponentModule, CategoryServiceModule, FilteredProductListSubjectComponentModule, ProductServiceModule, SortedProductListComponentModule, SortedEmployeeListComponentModule, EmployeeServiceModule, FilteredBeerListComponentModule, BeerServiceModule, ProductListWithDeleteComponentModule, EmployeeListWithDeleteComponentModule, ProductMasterDetailsComponentModule, EmployeeMasterDetailsComponentModule, CryptoCurrencyMasterDetailsComponentModule, CryptoCurrencyServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
