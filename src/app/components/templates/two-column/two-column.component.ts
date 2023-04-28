import { Component, Input } from '@angular/core';
import { PageContent } from '../../pages/contentModel';

@Component({
  selector: 'app-two-column',
  templateUrl: './two-column.component.html',
  styleUrls: ['./two-column.component.scss']
})
export class TwoColumnComponent {
  @Input() content:PageContent = {}
}
