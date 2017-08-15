import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { ValidationService } from './../shared/validation.service';

import template from './login.component.html';

@Component({
	template
})
export class LoginComponent implements OnInit{
	loginForm : FormGroup;

	email: AbstractControl;
	password: AbstractControl;
	remember: AbstractControl;
	constructor(
		private router: Router,
		private zone: NgZone,
		private fb: FormBuilder
		){}

	createForm():void{
		this.loginForm = this.fb.group({
			'email':['',[Validators.required, ValidationService.emailValidator]],
			'password':['',[Validators.required, ValidationService.passwordValidator]],
			'remember':['']
		});
		this.email = this.loginForm.controls['email'];
		this.password = this.loginForm.controls['password'];
		this.remember = this.loginForm.controls['remember'];
	}

	ngOnInit():void{
		this.createForm();
	}

	onSubmit(value:any):void{
		if(this.loginForm.valid){
			Meteor.loginWithPassword(this.email.value, this.password.value,(err) => {
				this.zone.run(() => {
					if(err){
						console.error(err);
					}else{
						this.router.navigate(['/']);
					}
				})
			})
		}
	}


}

