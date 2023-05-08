import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GIF_IMAGE_TYPE, GIF_IMAGE_WIDTH } from '@constant';
import { getRandomColor } from 'src/app/utils/gif.util';

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent {
  @Input() gif: any;
  @Input() row: number = 0;

  type = GIF_IMAGE_TYPE;
  customWidth = GIF_IMAGE_WIDTH;
  randomColor: string = '';

  @Output() gifCached = new EventEmitter<void>();

  constructor() {
    this.randomColor = getRandomColor();
  }

  get customHeight(): number {
    return Math.round(this.customWidth * (this.image.height / this.image.width));
  }

  get image(): any {
    return this.gif.images['original'];
  }

  cacheGif(): void {
    this.gifCached.emit();
  }
}
