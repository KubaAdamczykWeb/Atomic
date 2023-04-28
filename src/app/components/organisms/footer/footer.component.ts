import { Component, Input } from '@angular/core';

interface FooterData {
  text?: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() data: FooterData = {
    text: '',
  };
}
