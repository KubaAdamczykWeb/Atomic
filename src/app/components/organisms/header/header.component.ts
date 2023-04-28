import { Component, Input } from '@angular/core';

interface HeaderData {
  nav?: NavLink[];
}

interface NavLink {
  title: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() data: HeaderData = {
    nav: []
  };
}
