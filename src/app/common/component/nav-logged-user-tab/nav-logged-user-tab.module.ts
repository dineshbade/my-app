
import { NavLoggedUserTabComponent } from './nav-logged-user-tab.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations:[NavLoggedUserTabComponent],
  imports :[RouterModule],
  exports: [NavLoggedUserTabComponent]
})

export class NavLoggedUserTabModule{}
