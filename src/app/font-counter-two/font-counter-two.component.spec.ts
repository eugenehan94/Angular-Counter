import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontCounterTwoComponent } from './font-counter-two.component';

describe('FontCounterTwoComponent', () => {
  let component: FontCounterTwoComponent;
  let fixture: ComponentFixture<FontCounterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontCounterTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontCounterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
