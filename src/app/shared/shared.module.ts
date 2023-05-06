import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControlComponent } from './search-control/search-control.component';

@NgModule({
  declarations: [SearchControlComponent],
  imports: [
    CommonModule,
  ],
  exports: [SearchControlComponent]
})
export class SharedModule { }
