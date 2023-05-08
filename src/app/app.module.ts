import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouitngModule } from './app-rouitng.module';
import { SharedModule } from './shared/shared.module';
import { GifDetailComponent, GifListComponent, GifItemComponent } from '@module';
import { DivClampDirective, ScrollTrackerDirective } from '@directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LANGUAGES } from '@constant';

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    GifListComponent,
    GifDetailComponent,
    GifItemComponent,
    ScrollTrackerDirective,
    DivClampDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouitngModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: LANGUAGES.English,
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
