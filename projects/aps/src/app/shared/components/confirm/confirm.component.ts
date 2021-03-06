import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aps-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  @Input()
  message = '¿Quiere eliminar?';

  constructor() {}

  ngOnInit(): void {}
}
