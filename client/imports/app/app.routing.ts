import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FullLayoutComponent} from './../layouts/full-layout.component';

import {SimpleLayoutComponent} from './../layouts/simple-layout.component';

import {AuthGuard} from './../auth/auth-guard.service'

export const routes: Routes = [
	{
		path:'',
		redirectTo:'pages/dashboard',
		pathMatch:'full'
	},
	{
		path:'pages',
		component: FullLayoutComponent,
		data:{
			title:'Home'
		},
		children:[
			{
				path:'dashboard',
				loadChildren:() => require('./../dashboard/dashboard.module')['DashboardModule'],
				canActivate:[AuthGuard]
			}
		]
	},
	{
		path: '',
		component: SimpleLayoutComponent,
		data:{
			title: 'Auth'
		},
		children:[
			{
				path:'',
				loadChildren: () => require('./../auth/auth.module')['AuthModule']

			}
		]
	}
]
@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule {}


