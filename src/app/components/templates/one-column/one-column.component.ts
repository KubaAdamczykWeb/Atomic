import { Component, Input } from '@angular/core';
import { PageContent } from '../../pages/contentModel';

@Component({
  selector: 'app-one-column',
  templateUrl: './one-column.component.html',
  styleUrls: ['./one-column.component.scss']
})
export class OneColumnComponent {
  @Input() content:PageContent = {}
}
