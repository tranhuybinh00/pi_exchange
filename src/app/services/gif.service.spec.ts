import { TestBed } from '@angular/core/testing';
import { GifService } from './gif.service';
import { HttpClientModule } from '@angular/common/http';

describe('GifService', () => {
  let service: GifService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
