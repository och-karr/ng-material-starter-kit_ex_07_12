import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListRoutingComponent } from './filtered-product-list-routing.component';
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/product.service";

@NgModule({
    imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterLink],
  declarations: [FilteredProductListRoutingComponent],
  providers: [ProductService],
  exports: [FilteredProductListRoutingComponent]
})
export class FilteredProductListRoutingComponentModule {
}
