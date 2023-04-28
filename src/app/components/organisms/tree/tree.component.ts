import { Component, Input } from '@angular/core';

interface TreeData {
  items?: []
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() data: TreeData = {
    items: []
  };
}
