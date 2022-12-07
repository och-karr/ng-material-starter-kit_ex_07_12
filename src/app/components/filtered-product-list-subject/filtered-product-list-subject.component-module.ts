import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListSubjectComponent } from './filtered-product-list-subject.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    AsyncPipe,
    RouterLink,
    NgForOf,
    FlexModule,
    CommonModule
  ],
  declarations: [FilteredProductListSubjectComponent],
  providers: [],
  exports: [FilteredProductListSubjectComponent]
})
export class FilteredProductListSubjectComponentModule {
}
