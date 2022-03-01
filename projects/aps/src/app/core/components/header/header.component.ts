import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../application/auth.usecase';

@Component({
  selector: 'aps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthUseCase) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
}
