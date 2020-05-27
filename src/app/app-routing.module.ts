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
    loadChildren: () => import('./genres/banda/banda.module').then( m => m.BandaPageModule)
  },
  {
    path: 'kpop',
    loadChildren: () => import('./genres/kpop/kpop.module').then( m => m.KpopPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./genres/pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'rock',
    loadChildren: () => import('./genres/rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'electronica',
    loadChildren: () => import('./genres/electronica/electronica.module').then( m => m.ElectronicaPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
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
