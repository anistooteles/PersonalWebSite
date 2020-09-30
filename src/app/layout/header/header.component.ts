import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOn: boolean;
  lang: boolean;
  constructor() {}
  @Output() changeTheme = new EventEmitter<boolean>();
  @Output() changeLanguage = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.isOn = this.getTime();
    this.changeTheme.emit(this.isOn);
    this.lang = true;
    this.changeLanguage.emit(this.lang);
  }

  getTime(): boolean {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 5;
  }

  turnOn(): void {
    this.isOn = !this.isOn;
    this.changeTheme.emit(this.isOn);
  }

  changeLang(): void {
    this.lang = !this.lang;
    this.changeLanguage.emit(this.lang);
    console.log(this.lang, 'header');
  }
  redirectTo(url: string): void {
    window.open(url, '_blank');
  }
}
