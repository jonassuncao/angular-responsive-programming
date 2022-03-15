import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent {
  public model: string;
  public listeners: number[] = [];
  public subject$ = new Subject<string>();
  public behaviorSubject$ = new BehaviorSubject<string>('Valor inicial');
  @Output() public mensagem = new EventEmitter<string>();

  public onSubmit(msg: string) {
    this.subject$.next(msg);
    this.behaviorSubject$.next(msg);
    this.mensagem.emit(msg);
  }

  public onCreateOuvinte() {
    this.listeners.push(this.listeners.length);
  }
}
