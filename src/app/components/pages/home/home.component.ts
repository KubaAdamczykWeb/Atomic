import { Component } from '@angular/core';
import { PageContent, Template } from '../contentModel';
import { OrganismTypes } from '../../organisms/organismModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  content: PageContent = {
    template: Template.oneColumn,
    title: { text: 'Home'},
    columnA: {
      mutables: [
        {
          type: OrganismTypes.Article,
          data: {
            heading: "Article of Squab",
            text: "Text o gołębiach. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }
        },
        {
          type: OrganismTypes.ArticleWithPhoto,
          data: {
            heading: "Article of Howks",
            text: "Text o Jastrzębiach. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: {
              path: "https://picsum.photos/400",
              alt: "Random image"
            }
          }
        }
      ],
    }
  }
}
