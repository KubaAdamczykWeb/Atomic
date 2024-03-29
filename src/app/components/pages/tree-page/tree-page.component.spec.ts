import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePageComponent } from './tree-page.component';

describe('TreePageComponent', () => {
  let component: TreePageComponent;
  let fixture: ComponentFixture<TreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
