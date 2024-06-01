import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParquecampodesantanaPage } from './parquecampodesantana.page';

const routes: Routes = [
  {
    path: '',
    component: ParquecampodesantanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquecampodesantanaPageRoutingModule {}
