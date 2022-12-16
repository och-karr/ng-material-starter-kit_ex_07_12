import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { BeerService } from '../../services/beer.service';
import {BeerModel} from "../../models/beer.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-filtered-beer-list',
  templateUrl: './filtered-beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredBeerListComponent {
  private _pageParamsSubject: BehaviorSubject<{ pageIndex: number, pageSize: number }> = new BehaviorSubject<{ pageIndex: number, pageSize: number }>({ pageIndex: 1, pageSize: 10 });
  public pageParams$: Observable<{ pageIndex: number, pageSize: number }> = this._pageParamsSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = this.pageParams$.pipe(
    switchMap((data) =>
      this._beerService.getSomePerPage(data.pageIndex, data.pageSize)
    )
  );

  constructor(private _beerService: BeerService) {
  }

  changeItemsView($event: PageEvent): void {
    this._pageParamsSubject.next({
      pageIndex: $event.pageIndex + 1,
      pageSize: $event.pageSize
    });
  }
}
