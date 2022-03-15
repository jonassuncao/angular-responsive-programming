import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css'],
})
export class FormStatusComponent {
  @Input() public nome: string | any;
  @Input() public control: AbstractControl;
}
