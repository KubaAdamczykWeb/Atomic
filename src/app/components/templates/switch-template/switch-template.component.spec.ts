import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTemplateComponent } from './switch-template.component';

describe('SwitchTemplateComponent', () => {
  let component: SwitchTemplateComponent;
  let fixture: ComponentFixture<SwitchTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
