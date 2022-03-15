import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Lib {
  id: number;
  titulo: string;
  linguagem: string;
}
@Injectable()
export class BibliotecasService {
  public list(): Observable<Lib[]> {
    return of([
      { id: 1, titulo: 'RxJs', linguagem: 'Angular' },
      { id: 2, titulo: 'NgRx', linguagem: 'Angular' },
      { id: 3, titulo: 'Lodash', linguagem: 'JavaScript' },
      { id: 4, titulo: 'DateFns', linguagem: 'JavaScript' },
      { id: 5, titulo: 'Laravel', linguagem: 'PHP' },
      { id: 6, titulo: 'Symfony', linguagem: 'PHP' },
      { id: 7, titulo: 'Nest.Js', linguagem: 'Node.js' },
      { id: 8, titulo: 'Spring Boot', linguagem: 'Java' },
      { id: 9, titulo: 'PHPUnit', linguagem: 'PHP' },
      { id: 10, titulo: 'Jasmine', linguagem: 'JavaScript' },
    ]);
  }
}
