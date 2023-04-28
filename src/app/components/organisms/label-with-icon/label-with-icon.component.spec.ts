import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelWithIconComponent } from './label-with-icon.component';

describe('LabelWithIconComponent', () => {
  let component: LabelWithIconComponent;
  let fixture: ComponentFixture<LabelWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
