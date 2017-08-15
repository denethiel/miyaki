import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FullLayoutComponent} from './../layouts/full-layout.component';

import {SimpleLayoutComponent} from './../layouts/simple-layout.component';

export const routes: Routes = [
	{
		path:'',
		redirectTo:'pages/dasboard',
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
				loadChildren:'./../dashboard/dashboard.module#DashboardModule'
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
				loadChildren:'./../auth/auth.module#AuthModule'

			}
		]
	}
]
@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRoutingModule {}


