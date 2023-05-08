import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControlComponent } from './search-control/search-control.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [SearchControlComponent]
})
export class SharedModule { }