import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadlinesRoutingModule } from './headlines-routing.module';
import { HeadlineCardComponent } from './headline-card/headline-card.component';
import { HeadlineListComponent } from './headline-list/headline-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    HeadlineCardComponent,
    HeadlineListComponent
  ],
  exports: [
    HeadlineListComponent
  ],
  imports: [
    CommonModule,
    HeadlinesRoutingModule,
    MatSidenavModule,

  ]
})
export class HeadlinesModule { }
