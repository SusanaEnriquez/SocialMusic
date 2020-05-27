import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'music-genres',
    loadChildren: () => import('./pages/music-genres/music-genres.module').then( m => m.MusicGenresPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'banda',
    loadChildren: () => import('./pages/genres/banda/banda.module').then( m => m.BandaPageModule)
  },
  {
    path: 'kpop',
    loadChildren: () => import('./pages/genres/kpop/kpop.module').then( m => m.KpopPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pages/genres/pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./pages/genres/rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'electronica',
    loadChildren: () => import('./pages/genres/electronica/electronica.module').then( m => m.ElectronicaPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/genres/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  
];

/*
{
    path: '',
    redirectTo: '/tabs/tabs/home',
    pathMatch: 'full'
  },
*/

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
