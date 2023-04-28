import { Component, Input } from '@angular/core';
import { PageContent, Template } from '../../pages/contentModel';

@Component({
  selector: 'app-switch-template',
  templateUrl: './switch-template.component.html',
  styleUrls: ['./switch-template.component.scss']
})
export class SwitchTemplateComponent {
  @Input() content:PageContent = { }

  template? = Template.oneColumn;
  footer = {
    text: "Copyright 2023"
  };
  header = {
    nav: [
      {title: "Home", path: '/home'},
      {title: "About", path: '/about'},
      {title: "Two Columns", path: '/two-columns'},
      {title: "Tree", path: '/tree'}
    ]
  };

  ngOnInit() {
    this.template = this.content.template;
  }
}
