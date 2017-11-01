
import { NavLoggedUserTabComponent } from '../common/component/nav-logged-user-tab/nav-logged-user-tab.component';
import { NgModule } from '@angular/core';

import { TopNavComponent } from './top-nav.component';


@NgModule({
  declarations:[TopNavComponent,
  NavLoggedUserTabComponent],
  imports :[ ],
  exports :[NavLoggedUserTabComponent,TopNavComponent]
})

export class TopNavModule{}
