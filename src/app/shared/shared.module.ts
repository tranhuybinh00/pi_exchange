import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControlComponent } from './search-control/search-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchControlComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchControlComponent]
})
export class SharedModule { }
