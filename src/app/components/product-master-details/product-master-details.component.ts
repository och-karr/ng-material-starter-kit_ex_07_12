import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, of, Subject, switchMap} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-master-details',
  templateUrl: './product-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMasterDetailsComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  private _selectedProductSubject: Subject<ProductModel | undefined> = new Subject<ProductModel | undefined>();
  public selectedProduct$: Observable<ProductModel | undefined> = this._selectedProductSubject.asObservable();
  // readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  // private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  // public selectedProductId$: Observable<number> = this._selectedProductIdSubject.asObservable();
  // readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
  //   switchMap(data => this._productService.getOne(data)));

  readonly similarProducts$: Observable<ProductModel[]> = this.selectedProduct$.pipe(
    switchMap(data => {
      if (data) {
        return this._productService.getAllInCategory(data.category).pipe(
          map(data => data.slice(0,3))
        );
      }
      return of([]);
    })
  );
  constructor(private _productService: ProductService) {
  }

  selectProduct(product: ProductModel): void {
    // this._selectedProductIdSubject.next(id);
    this._selectedProductSubject.next(product);
  }

  hideProduct() {
    this._selectedProductSubject.next(undefined);
  }
}
