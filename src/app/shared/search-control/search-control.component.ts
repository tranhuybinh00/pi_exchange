import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent {
  @Output() doSearch = new EventEmitter<string>();
  text: string = '';

  onSearch(): void {
    this.doSearch.emit(this.text);
  }
}
