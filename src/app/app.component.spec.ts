import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LANGUAGES } from '@constant';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRouitngModule } from './app-rouitng.module';

describe('AppComponent', () => {
  function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        HttpClientModule,
        AppRouitngModule,
        TranslateModule.forRoot({
          defaultLanguage: LANGUAGES.English,
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
