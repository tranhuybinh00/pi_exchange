import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlComponent } from './search-control.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LANGUAGES } from '@constant';
import { FormsModule } from '@angular/forms';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchControlComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: LANGUAGES.English,
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
