import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, switchMap} from 'rxjs';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-filtered-beer-list',
  templateUrl: './filtered-beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredBeerListComponent {
  private _pageSizeOptionsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public pageSizeOption$: Observable<number> = this._pageSizeOptionsSubject.asObservable();

  private _pageIndexOptionsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public pageIndexOption$: Observable<number> = this._pageIndexOptionsSubject.asObservable();

  readonly beers$ = combineLatest([
    this.pageSizeOption$,
    this.pageIndexOption$
  ]).pipe(
    switchMap(([pageSize, pageIndex]: [number, number]) =>
      this._beerService.getSomePerPage(pageIndex, pageSize)
    )
  );

  constructor(private _beerService: BeerService) {
  }

  changeItemsView(itemsPerPage: number, pageIndex: number): void {
    this._pageIndexOptionsSubject.next(pageIndex + 1);
    this._pageSizeOptionsSubject.next(itemsPerPage);
  }
}
