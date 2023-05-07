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
    this._loadGifs(this.paginator);
  }

  onScrollingFinished(): void {
    this.paginator.offset = this.paginator.offset + this.paginator.count;
    this._loadGifs(this.paginator);
  }

  gifRow(index: number): number {
    return Math.trunc(index / 4);
  }

  doSearch(text: string): void {
    this.paginator.q = text;
    this.paginator.offset = 0;
    if (text) {
      this._searchGifs(this.paginator);
    } else {
      this._loadGifs(this.paginator);
    }
  }
  
  private _loadGifs(paginator: any): void {
    this._gifSrv.list(paginator).subscribe(
      res => {
        this.gifs = [...this.gifs, ...res.data] 
        this.paginator = { ...this.paginator, ...res.pagination };
      });
  }

  private _searchGifs(paginator: any): void {
    this._gifSrv.search(paginator).subscribe(
      res => {
        this.gifs = res.data;
        this.paginator = { ...this.paginator, ...res.pagination };
      }
    );
  }
}
