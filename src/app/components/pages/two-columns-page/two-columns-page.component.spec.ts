import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsPageComponent } from './two-columns-page.component';

describe('TwoColumnsPageComponent', () => {
  let component: TwoColumnsPageComponent;
  let fixture: ComponentFixture<TwoColumnsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
