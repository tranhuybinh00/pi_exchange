import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GifDetailComponent } from './gif-detail.component';
import { HttpClientModule } from '@angular/common/http';

describe('GifDetailComponent', () => {
  let component: GifDetailComponent;
  let fixture: ComponentFixture<GifDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifDetailComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
