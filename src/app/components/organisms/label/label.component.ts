import { Component, Input } from '@angular/core';

interface TreeLabel {
  label?: string
}

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class TreeLabelComponent {
  @Input() data: TreeLabel = {
    label: '',
  };
}
