import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FilteredBeerListComponent } from './filtered-beer-list.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [
    MatListModule,
    NgForOf,
    AsyncPipe,
    CommonModule,
    MatPaginatorModule
  ],
  declarations: [FilteredBeerListComponent],
  providers: [],
  exports: [FilteredBeerListComponent]
})
export class FilteredBeerListComponentModule {
}
