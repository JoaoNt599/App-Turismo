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
    path: 'parquevilalobos',
    loadChildren: () => import('./parques/parquevilalobos/parquevilalobos.module').then( m => m.ParquevilalobosPageModule)
  },
  {
    path: 'parquemetropolitano',
    loadChildren: () => import('./parques/parquemetropolitano/parquemetropolitano.module').then( m => m.ParquemetropolitanoPageModule)
  },
  {
    path: 'parquequintadaboavista',
    loadChildren: () => import('./parques/parquequintadaboavista/parquequintadaboavista.module').then( m => m.ParquequintadaboavistaPageModule)
  },
  {
    path: 'parqueapoteose',
    loadChildren: () => import('./parques/parqueapoteose/parqueapoteose.module').then( m => m.ParqueapoteosePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
