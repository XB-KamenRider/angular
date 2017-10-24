import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLogin } from './login/app.login';
import { AppIndex } from './home/app.index';

const routes: Routes = [
  { path: 'login',  component: AppLogin },
  { path: 'index', component: AppIndex }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
