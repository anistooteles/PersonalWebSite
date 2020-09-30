import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personalWebSite';
  isOn: boolean;
  lang: boolean;

  onChangeTheme(event: boolean): void {
    this.isOn = event;
  }

  onChangeLang(event: boolean): void {
    this.lang = event;
    console.log(this.lang, 'app');
  }
}
