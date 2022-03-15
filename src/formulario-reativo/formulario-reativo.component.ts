import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Usuario, UsuarioService } from './usuario.service';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioReativoComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public form: FormGroup;
  public usuarios$: Observable<Usuario[]>;
  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  public ngOnInit() {
    this.initForm();
    this.loadData();
  }

  public ngAfterViewInit() {
    this.loadListeners();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      this.save(form.value);
      form.reset();
    } else {
      alert('Formulário inválido!');
    }
  }

  private save(value: any) {
    alert(JSON.stringify(value));
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: undefined,
      unidade: 'Portal da educação',
      nome: [undefined, [Validators.required]],
      serie: [undefined, [Validators.required, this.onlyNumber]],
      turma: [undefined, [Validators.required, this.onlyAlpha]],
      usuarioId: [undefined, [Validators.required]],
    });
  }

  private loadListeners() {
    this.form
      .get('serie')
      .valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => this.form.get('turma').reset());
  }

  private onlyNumber = (control: AbstractControl) => {
    if ((control.value || '').match(/^[0-9]+$/)) {
      return null;
    }
    return { onlyNumber: true };
  };

  private onlyAlpha = (control: AbstractControl) => {
    if ((control.value || '').match(/^[A-Za-z]+$/)) {
      return null;
    }
    return { onlyAlpha: true };
  };

  private loadData() {
    this.usuarios$ = this.usuarioService.lista();
  }
}
