import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParqueflamengoPage } from './parqueflamengo.page';

const routes: Routes = [
  {
    path: '',
    component: ParqueflamengoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParqueflamengoPageRoutingModule {}
