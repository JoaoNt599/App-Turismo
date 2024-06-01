import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquedospatinsPage } from './parquedospatins.page';

const routes: Routes = [
  {
    path: '',
    component: ParquedospatinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquedospatinsPageRoutingModule {}
