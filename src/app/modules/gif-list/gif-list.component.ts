import { Component, HostListener, OnInit } from '@angular/core';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})
export class GifListComponent implements OnInit {
  gifs: any[] = [];
  paginator = {
    q: '',
    offset: 0,
    total_count: 0,
    count: 0
  };
  constructor(
    private _gifSrv: GifService
  ) {}

  ngOnInit(): void {
    this._loadMore(this.paginator);
  }

  private _loadMore(paginator: any): void {
    console.log(paginator);
    this._gifSrv.list(paginator).subscribe(
      res => {
        this.gifs = [...this.gifs, ...res.data] 
        this.paginator = { ...this.paginator, ...res.pagination };
      })
  }

  onScrollingFinished(): void {
    this.paginator.offset = this.paginator.offset + this.paginator.count;
    this._loadMore(this.paginator);
  }

  gifRow(index: number): number {
    return Math.trunc(index / 4);
  }
}
