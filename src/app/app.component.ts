import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public angular = 'Angular ' + VERSION.full;
  public mensagem: string;

  public onReceive(msg: string) {
    this.mensagem = msg;
  }
}
