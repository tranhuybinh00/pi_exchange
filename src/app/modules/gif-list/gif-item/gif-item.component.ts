import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent {
  private _colors: string[] = [
    '#00FF99',
    '#00CCFF',
    '#FF6666',
    '#9933FF'
  ];
  @Input() image: any;
  @Input() type: string = 'image/webp';
  @Input() row: number = 0;

  customWidth: number = 248;
  randomColor: string = '';

  constructor() {
    this.randomColor = this._colors[Math.floor(Math.random() * this._colors.length)];
  }

  get customHeight(): number {
    return Math.round(this.customWidth * (this.image.height / this.image.width));
  }
}
