import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  colors = [
    '#ffe36a',
    '#56b849',
    '#08add9',
    '#e43796',
    '#f7954e',
    '#72266e',
    '#eb3492',
    '#cb8fc0',
    '#19b2ca',
    '#1c356a',
    '#21b685',
    '#f5822d',
    '#eb3492',
    '#bbd44c',
    '#feda61',
    '#a7def2',
    '#7585c0',
    '#f5a0c6',
    '#c5a0cb',
    '#f1dff2',
    '#ffb948',
    '#d2df35',
  ];
  @Input() isOn: boolean;
  constructor() {}

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  setRandomColor(): void {
    const icons = Array.from(document.querySelectorAll('.footer__icon'));
    icons.forEach((element: HTMLDivElement) => {
      element.style.color = this.getRandomColor();
      //console.log(element.style.color);
    });
    setInterval(() => {
      icons.forEach((element: HTMLDivElement) => {
        element.style.color = this.getRandomColor();
        //console.log(element.style.color);
      });
    }, 3000);
  }

  ngOnInit(): void {
    this.setRandomColor();
    console.log(this.isOn);
  }

  changeColor(): void {
    const icons = Array.from(document.querySelectorAll('.footer__icon'));
    icons.forEach((element: HTMLDivElement) => {
      element.style.color = this.getRandomColor();
      //console.log(element.style.color);
    });
  }
  redirectTo(url: string): void {
    window.open(url, '_blank');
  }
}
