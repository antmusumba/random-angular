import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule, MatSidenavContainer, MatSelect, MatSidenav, MatIconModule
  ],

  exports: [CommonModule, MatToolbarModule, MatSidenavContainer, MatSelect, MatSidenav, MatIconModule]
})
export class SharedModule { }
