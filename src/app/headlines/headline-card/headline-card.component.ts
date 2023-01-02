import { Component, OnInit, Input } from '@angular/core';
import {articleType} from "../../app.component";

@Component({
  selector: 'app-headline-card',
  templateUrl: './headline-card.component.html',
  styleUrls: ['./headline-card.component.scss']
})
export class HeadlineCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() article!: articleType;
}
