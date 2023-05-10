import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GifListComponent } from './gif-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGES } from '@constant';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRouitngModule } from 'src/app/app-rouitng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GifService } from 'src/app/services/gif.service';
import { of } from 'rxjs';

describe('GifListComponent', () => {
  let component: GifListComponent;
  let fixture: ComponentFixture<GifListComponent>;
  let fakeGifService: GifService;

  function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
  }

  beforeEach(async () => {
    fakeGifService = jasmine.createSpyObj<GifService>('GifService', {
      list: of({
        data: {
          username: 'miamiheat',
          rating: 'g',
          tags: [
            "sport",
            "basketball",
            "nba",
            "nope",
            "miami",
          ],
          images: {
            original: {
              "height": "291",
              "width": "518",
              "size": "11602665",
              "url": "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.gif?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
              "mp4_size": "1524925",
              "mp4": "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.mp4?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
              "webp_size": "2920254",
              "webp": "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.webp?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
              "frames": "113",
              "hash": "830ae68fa7d9428000cf923292f0628c"
            }
          }
        }
      }),
      search: of({})
    });
    await TestBed.configureTestingModule({
      declarations: [ 
        GifListComponent 
      ],
      imports: [
        SharedModule,
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
      ],
      providers: [
        { provider: GifService, useValue: fakeGifService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gifs Data', () => {
    fixture.detectChanges();
    expect(component.gifs.length).toEqual(0);
  });
});
