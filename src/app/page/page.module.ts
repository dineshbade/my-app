
import { NgModule } from '@angular/core';
import { SideNavModule } from '../side-nav/side-nav.module';
import { SideNavComponent } from '../side-nav/side-nav.component';

import { TopNavModule } from '../top-nav/top-nav.module';
import {PageComponent } from './page.component';
import { Routes, RouterModule } from '@angular/router';
import {PageRoutingModule} from './page.routing.module';
import { AuthGuard } from '../common/service/auth.guard';


@NgModule({
  declarations: [
  PageComponent
   ],
  imports: [
  TopNavModule,
SideNavModule,
 PageRoutingModule,
  ],
  providers: [ AuthGuard]
})
export class PageModule {}