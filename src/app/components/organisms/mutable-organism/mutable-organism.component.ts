import { Component, Input } from '@angular/core';
import { Mutable, OrganismTypes } from '../organismModel';

@Component({
  selector: 'app-mutable-organism',
  templateUrl: './mutable-organism.component.html',
  styleUrls: ['./mutable-organism.component.scss']
})
export class MutableOrganismComponent {
  @Input() content: Mutable = {
    type: OrganismTypes.Article,
    data: Object
  };
}
