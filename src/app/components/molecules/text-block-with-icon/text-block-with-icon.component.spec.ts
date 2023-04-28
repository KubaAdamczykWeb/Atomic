import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockWithIconComponent } from './text-block-with-icon.component';

describe('TextBlockWithIconComponent', () => {
  let component: TextBlockWithIconComponent;
  let fixture: ComponentFixture<TextBlockWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlockWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBlockWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
