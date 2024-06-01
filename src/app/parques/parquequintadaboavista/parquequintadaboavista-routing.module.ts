import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquequintadaboavistaPage } from './parquequintadaboavista.page';

const routes: Routes = [
  {
    path: '',
    component: ParquequintadaboavistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquequintadaboavistaPageRoutingModule {}
