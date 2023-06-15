import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPlayingComponent } from './videos-playing.component';

describe('VideosPlayingComponent', () => {
  let component: VideosPlayingComponent;
  let fixture: ComponentFixture<VideosPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPlayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
