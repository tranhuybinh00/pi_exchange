import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouitngModule } from './app-rouitng.module';
import { SharedModule } from './shared/shared.module';
import { GifDetailComponent, GifListComponent, GifItemComponent } from '@module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifDetailComponent,
    GifItemComponent,
    ScrollTrackerDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouitngModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
