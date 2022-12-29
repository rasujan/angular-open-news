import {
  AfterViewInit,
  Component,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

interface articleType {
  author: String;
  urlToImage: String;
  publishedAt: String;
  title: String;
  description: String;
  url: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'theGlobalTimes';

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef
  ) {}

  articles: articleType[] = [
    {
      author: 'sujan',
      urlToImage: 'https://www.w3schools.com/css/paris.jpg',
      publishedAt: '2022-12-12',
      title: 'abc',
      description: 'asdfaf',
      url: 'https://www.w3schools.com/css/paris.jpg',
    },
  ];

  selectedNewsChannel = 'ABC';
  article: articleType = {
    author: 'sujan',
    urlToImage: 'mm',
    publishedAt: '2022-12-12',
    title: 'abc',
    description: 'asdfaf',
    url: 'asdfasd',
  };

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe([`(max-width: 768px)`]).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
    this.cdr.detectChanges();
  }
}
