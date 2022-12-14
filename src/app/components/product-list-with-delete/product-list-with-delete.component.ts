import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list-with-delete',
  templateUrl: './product-list-with-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListWithDeleteComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
    switchMap(() => this._productService.getAll())
  );

  constructor(private _productService: ProductService) {
  }

  remove(id: number): void {
    this._productService.delete(id).subscribe(
      () => this._refreshSubject.next()
    );
  }
}
