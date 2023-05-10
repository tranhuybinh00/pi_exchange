import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GifItemComponent } from './gif-item.component';
import { AppRouitngModule } from 'src/app/app-rouitng.module';
import { GIF_IMAGE_TYPE, GIF_IMAGE_WIDTH } from '@constant';

describe('GifItemComponent', () => {
  let component: GifItemComponent;
  let fixture: ComponentFixture<GifItemComponent>;
  const gif = {
    username: 'miamiheat',
    rating: 'g',
    tags: [
      "sport",
      "basketball",
      "nba",
      "nope",
      "miami",
      "heat",
      "miami heat",
      "finger wag",
      "jimmy butler",
      "jimmy buckets",
      "heatculture",
      "heattwitter",
      "unguardable",
      "whitehot",
      "not him",
      "himmy",
      "he cant guard me"
    ],
    images: {
      original: {
        height: "291",
        width: "518",
        size: "11602665",
        url: "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.gif?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        mp4_size: "1524925",
        mp4: "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.mp4?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.mp4&ct=g",
        webp_size: "2920254",
        webp: "https://media0.giphy.com/media/jnDe44DSWj2nwREhHZ/giphy.webp?cid=ecf05e476e24ejv7ynps7fapejcoapcz9pl9cio28qpx0n6o&ep=v1_gifs_trending&rid=giphy.webp&ct=g",
        frames: "113",
        hash: "830ae68fa7d9428000cf923292f0628c"
      }
    } 
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifItemComponent ],
      imports: [ AppRouitngModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.gif = gif;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('render gif item', () => {
    component.gif = gif;
    component.type = GIF_IMAGE_TYPE;
    component.customWidth = GIF_IMAGE_WIDTH;
    expect(component.gif).toBeDefined();
  });
});
