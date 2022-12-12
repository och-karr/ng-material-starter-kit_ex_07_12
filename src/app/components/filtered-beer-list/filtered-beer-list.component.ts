import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-filtered-beer-list',
  templateUrl: './filtered-beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredBeerListComponent {
  pageSizeOptions = [5, 10, 25];
  private _pageSizeOptionsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  public pageSizeOption$: Observable<number> = this._pageSizeOptionsSubject.asObservable();

  readonly beers$ = this.pageSizeOption$.pipe(
    switchMap((pageSize: number) =>
      this._beerService.getSomePerPage(2, pageSize)
    )
  );

  constructor(private _beerService: BeerService) {
  }

  selectItemsPerPage(itemsPerPage: number, pageIndex: number): void {
    this._pageSizeOptionsSubject.next(itemsPerPage);
    console.log(pageIndex);

  }

}
