import { Component, OnInit, Input } from '@angular/core';

interface TitleData {
  text?: string
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() data?: TitleData = { text: '' };

  titleText = '';
  type = 1;

  ngOnInit() {
    this.titleText = "Page: "+ this.data?.text;
  }
}
