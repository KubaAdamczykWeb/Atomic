import { Component, Input } from '@angular/core';

interface ArticleData {
  heading?: string,
  text?: string
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() data: ArticleData = {
    heading: '',
    text: '',
  };

  headingType = 2;
}
