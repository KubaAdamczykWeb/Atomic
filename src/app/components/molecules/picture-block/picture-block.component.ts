import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-block',
  templateUrl: './picture-block.component.html',
  styleUrls: ['./picture-block.component.scss']
})
export class PictureBlockComponent {
  @Input() alt? = "";
  @Input() url? = "";
}
