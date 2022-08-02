import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontCounterOneComponent } from './font-counter-one.component';

describe('FontCounterOneComponent', () => {
  let component: FontCounterOneComponent;
  let fixture: ComponentFixture<FontCounterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontCounterOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontCounterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
