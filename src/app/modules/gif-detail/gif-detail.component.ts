import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GIF_IMAGE_TYPE, MAX_TAG } from '@constant';
import { GifService } from 'src/app/services/gif.service';
import { getRandomColor } from 'src/app/utils/gif.util';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifDetailComponent implements OnInit, OnDestroy { 
  gif: any;
  type = GIF_IMAGE_TYPE;
  randomColor: string = '';
  overload: boolean = false;
  maxTag = MAX_TAG;

  constructor(
    private _gifSrv: GifService,
    private _router: Router,
    private _cd: ChangeDetectorRef
  ) {
    this.randomColor = getRandomColor();
  }

  ngOnDestroy(): void {
    this._gifSrv.gifDetailBehaviorSubject.next(null);
  }

  ngOnInit(): void {
    this._gifSrv.gifDetailBehaviorSubject.subscribe(res => {
      this.gif = res;
    });
  }

  get image(): any {
    return this.gif.images['original'];
  }

  get tagFiltered(): any {
    if (this.overload) {
      return this.gif.tags.slice(0, MAX_TAG);
    }
    return this.gif.tags;
  }

  onBack(): void {
    this._gifSrv.gifDetailBehaviorSubject.next(null);
    this._router.navigate(['/gif-list']);
  }

  onOverCountChanged(): void {
    this.overload = true;
    this._cd.detectChanges();
  }

  loadTagMore(): void {
    this.overload = false;
  }
}
