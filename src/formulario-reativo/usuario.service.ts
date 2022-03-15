import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

@Injectable()
export class UsuarioService {
  public lista(): Observable<Usuario[]> {
    const usuario = [
      { id: 1, nome: 'Júlio Campos', email: 'julio.campos@workshop.com' },
      { id: 2, nome: 'Paulo Henrique', email: 'paulo.henrique@workshop.com' },
      {
        id: 3,
        nome: 'Marly Figueiredo',
        email: 'marly.figueiredo@workshop.com',
      },
      {
        id: 4,
        nome: 'Edison Albuquerque',
        email: 'edison.albuquerque@workshop.com',
      },
      { id: 5, nome: 'Gleyce Valente', email: 'gleyce.valente@workshop.com' },
    ];
    return of(usuario).pipe(take(1));
  }
}
