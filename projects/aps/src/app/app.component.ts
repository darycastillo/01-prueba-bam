import { Component } from '@angular/core';
import { ConfigLayout } from './config/interfaces/config-layout.interface';
import { ConfigService } from './config/services/config.service';

@Component({
  selector: 'aps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aps';
  expanded = true;

  config!: ConfigLayout;

  constructor(private configService: ConfigService) {
    this.configService.configuration.subscribe(
      (response: ConfigLayout) => (this.config = response)
    );
  }

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
