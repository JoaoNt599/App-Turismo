import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'parquelage',
    loadChildren: () => import('./parques/parquelage/parquelage.module').then( m => m.ParquelagePageModule)
  },
  {
    path: 'parquemadureira',
    loadChildren: () => import('./parques/parquemadureira/parquemadureira.module').then( m => m.ParquemadureiraPageModule)
  },
  {
    path: 'parquenacionaldatijuca',
    loadChildren: () => import('./parques/parquenacionaldatijuca/parquenacionaldatijuca.module').then( m => m.ParquenacionaldatijucaPageModule)
  },
  {
    path: 'parqueflamengo',
    loadChildren: () => import('./parques/parqueflamengo/parqueflamengo.module').then( m => m.ParqueflamengoPageModule)
  },
  
  
  {
    path: 'parquequintadaboavista',
    loadChildren: () => import('./parques/parquequintadaboavista/parquequintadaboavista.module').then( m => m.ParquequintadaboavistaPageModule)
  },
  {
    path: 'parquecampodesantana',
    loadChildren: () => import('./parques/parquecampodesantana/parquecampodesantana.module').then( m => m.ParquecampodesantanaPageModule)
  },
  {
    path: 'parquedospatins',
    loadChildren: () => import('./parques/parquedospatins/parquedospatins.module').then( m => m.ParquedospatinsPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
