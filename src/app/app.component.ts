import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personalWebSite';
  isOn: boolean;
  onChangeTheme(event: boolean): void {
    this.isOn = event;
    console.log(event);
  }
}
