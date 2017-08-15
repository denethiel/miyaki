import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import template from './dashboard.component.html';

@Component({
	template
})
export class DashboardComponent implements OnInit {
	constructor(private router: Router){}
	ngOnInit():void{

	}
}