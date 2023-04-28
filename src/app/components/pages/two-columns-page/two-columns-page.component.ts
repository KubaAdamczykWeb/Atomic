import { Component } from '@angular/core';
import { PageContent, Template } from '../contentModel';
import { OrganismTypes } from '../../organisms/organismModel';

@Component({
  selector: 'app-two-columns-page',
  templateUrl: './two-columns-page.component.html',
  styleUrls: ['./two-columns-page.component.scss']
})
export class TwoColumnsPageComponent {
  content: PageContent = {
    template: Template.twoColumn,
    title: {text:"Two Columns"},
    columnA: {
      mutables: [
        {
          type: OrganismTypes.Article,
          data: {
            heading: "Firts column Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }
        },
        {
          type: OrganismTypes.Article,
          data: {
            heading: "Firs column second Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }
        }
      ],
    },
    columnB: {
      mutables: [
        {
          type: OrganismTypes.ArticleWithPhoto,
          data: {
            heading: "Second column Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: {
              path: "https://picsum.photos/400",
              alt: "Random image"
            }
          }
        },
        {
          type: OrganismTypes.Article,
          data: {
            heading: "Second column second Article",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          }
        }
      ],
    }
  };
}
