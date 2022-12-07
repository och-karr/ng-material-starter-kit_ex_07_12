import { NgModule } from '@angular/core';
import { FilteredProductListSubjectComponent } from './filtered-product-list-subject.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { FlexModule } from '@angular/flex-layout/flex';

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    AsyncPipe,
    RouterLink,
    NgForOf,
    FlexModule
  ],
  declarations: [FilteredProductListSubjectComponent],
  providers: [],
  exports: [FilteredProductListSubjectComponent]
})
export class FilteredProductListSubjectComponentModule {
}
