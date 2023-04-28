import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutableOrganismComponent } from './mutable-organism.component';

describe('MutableOrganismComponent', () => {
  let component: MutableOrganismComponent;
  let fixture: ComponentFixture<MutableOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutableOrganismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutableOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
