import { Component, Input  } from '@angular/core';

interface ArticleWithPhotoData {
  heading?: string,
  text?: string,
  photo?: {
    path: string,
    alt: string
  }
}

@Component({
  selector: 'app-article-with-photo',
  templateUrl: './article-with-photo.component.html',
  styleUrls: ['./article-with-photo.component.scss']
})
export class ArticleWithPhotoComponent {
  @Input() data?: ArticleWithPhotoData = {
    heading: '',
    text: '',
    photo: {
      path: '',
      alt: ''
    }
  };

  headingType = 2;
}
