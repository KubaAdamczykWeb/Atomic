import { Component, Input, OnInit } from '@angular/core';
import { Mutable, OrganismTypes} from '../../organismModel';

interface TreeItemData {
 tree?: Object,
 mutable: Mutable
}

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent {
  @Input() data: TreeItemData = {
    tree: {},
    mutable: {
      type: OrganismTypes.Label,
      data: {
        label: "brak tekstu"
      }
    }
  };

  ngOnInit(){

  }
}
