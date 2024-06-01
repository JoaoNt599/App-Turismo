import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquenacionaldatijucaPage } from './parquenacionaldatijuca.page';

const routes: Routes = [
  {
    path: '',
    component: ParquenacionaldatijucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquenacionaldatijucaPageRoutingModule {}
