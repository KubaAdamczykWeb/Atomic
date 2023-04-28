import { Component } from '@angular/core';
import { PageContent, Template } from '../contentModel';
import { OrganismTypes } from '../../organisms/organismModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  content: PageContent = {
    template: Template.oneColumn,
    title: {
      text: "About"
    },
    columnA: {
      mutables: [
        {
          type: OrganismTypes.ArticleWithPhoto,
          data: {
            heading: "Mutables works!!!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            photo: {
              path: "https://picsum.photos/400",
              alt: "Random image"
            }
          }
        },
        {
          type: OrganismTypes.Header,
          data: {
            nav: [{
              title: "Back home",
              path: "/"
            }]
          }
        },
      ]
    }
  };
}
