import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOn: boolean;
  constructor() {}
  @Output() changeTheme = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.isOn = this.getTime();
    this.changeTheme.emit(this.isOn);
  }

  getTime(): boolean {
    return new Date().getHours() >= 19;
  }

  turnOn(): void {
    this.isOn = !this.isOn;
    this.changeTheme.emit(this.isOn);
  }
}
