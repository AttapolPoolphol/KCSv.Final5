import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'regis',
    loadChildren: () => import('./regis/regis.module').then( m => m.RegisPageModule)
  },
  {
    path: 'center',
    loadChildren: () => import('./center/center.module').then( m => m.CenterPageModule),
    
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'progressbar',
    loadChildren: () => import('./progressbar/progressbar.module').then( m => m.ProgressbarPageModule)
  },
  {
    path: 's1c1',
    loadChildren: () => import('./s1c1/s1c1.module').then( m => m.S1c1PageModule)
  },
  {
    path: 's2c1',
    loadChildren: () => import('./s2c1/s2c1.module').then( m => m.S2c1PageModule)
  },
  {
    path: 's2c2',
    loadChildren: () => import('./s2c2/s2c2.module').then( m => m.S2c2PageModule)
  },
  {
    path: 's2c3',
    loadChildren: () => import('./s2c3/s2c3.module').then( m => m.S2c3PageModule)
  },
  {
    path: 's3c1',
    loadChildren: () => import('./s3c1/s3c1.module').then( m => m.S3c1PageModule)
  },
  {
    path: 's3c2',
    loadChildren: () => import('./s3c2/s3c2.module').then( m => m.S3c2PageModule)
  },
  {
    path: 'editpro',
    loadChildren: () => import('./editpro/editpro.module').then( m => m.EditproPageModule)
  },
  {
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then( m => m.BankPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'slip',
    loadChildren: () => import('./slip/slip.module').then( m => m.SlipPageModule)
  },

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
