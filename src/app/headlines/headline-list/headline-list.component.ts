import { Component, OnInit , Input} from '@angular/core';
import {articleType} from "../../app.component";

@Component({
  selector: 'app-headline-list',
  templateUrl: './headline-list.component.html',
  styleUrls: ['./headline-list.component.scss']
})
export class HeadlineListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() selectedNewsChannel!: String;
  @Input() articles: Iterable<articleType> =[];


}
