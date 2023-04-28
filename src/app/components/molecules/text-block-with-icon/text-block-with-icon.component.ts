import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-block-with-icon',
  templateUrl: './text-block-with-icon.component.html',
  styleUrls: ['./text-block-with-icon.component.scss']
})
export class TextBlockWithIconComponent {
  @Input() text? = "brak treści";
}
