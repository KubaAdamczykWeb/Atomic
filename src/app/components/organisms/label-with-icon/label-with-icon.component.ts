import { Component, Input } from '@angular/core';

interface TreeLabel {
  label?: string
}

@Component({
  selector: 'app-label-with-icon',
  templateUrl: './label-with-icon.component.html',
  styleUrls: ['./label-with-icon.component.scss']
})
export class LabelWithIconComponent {
  @Input() data: TreeLabel = {
    label: '',
  };
}
