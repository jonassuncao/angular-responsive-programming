import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  Subject,
} from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { BibliotecasService, Lib } from './bibliotecas.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  public orderCtrl = new FormControl('titulo');
  public pageCtrl = new FormControl(1);
  public data$: Observable<Lib[]>;
  private _filter$ = new Subject<string>();

  constructor(private bibliotecasService: BibliotecasService) {}

  public ngOnInit() {
    this.loadData();
  }

  public onFilter(msg: string) {
    this._filter$.next(msg);
  }

  private loadData() {
    const orderPage$ = this.orderPageListeners();
    const bibliotecas$ = this.bibliotecasService.list();
    this.data$ = combineLatest([this._filter$, bibliotecas$, orderPage$]).pipe(
      tap(console.log),
      // map((data) => this.applyFilter(data[0], data[1]))
      map(([filtro, bibliotecas]) => {
        const orderBy = this.orderCtrl.value;
        const page = this.pageCtrl.value;
        const value = this.applyFilter(filtro, bibliotecas).sort(
          this.sort(orderBy)
        );
        return this.applyPage(page, value);
      })
    );
  }

  private orderPageListeners() {
    return merge(this.orderCtrl.valueChanges, this.pageCtrl.valueChanges).pipe(
      startWith(undefined)
    );
  }

  private applyFilter(filtro: string, bibliotecas: Lib[]): Lib[] {
    return bibliotecas.filter((lib) => this.match(filtro, lib));
  }

  private match(expressao: string, { titulo, linguagem }: Lib): boolean {
    return [titulo, linguagem].some((target) =>
      target.toLowerCase().includes(expressao.toLowerCase())
    );
  }

  private sort(key: string): (a: Lib, b: Lib) => number {
    return (a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    };
  }

  private applyPage(page: number, libs: Lib[]): Lib[] {
    const start = (page - 1) * 4;
    return libs.slice(start, start + 4);
  }
}
