import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquelagePage } from './parquelage.page';

const routes: Routes = [
  {
    path: '',
    component: ParquelagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquelagePageRoutingModule {}
