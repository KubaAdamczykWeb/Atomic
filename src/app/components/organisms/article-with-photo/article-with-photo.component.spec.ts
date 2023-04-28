import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWithPhotoComponent } from './article-with-photo.component';

describe('ArticleWithPhotoComponent', () => {
  let component: ArticleWithPhotoComponent;
  let fixture: ComponentFixture<ArticleWithPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleWithPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleWithPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
