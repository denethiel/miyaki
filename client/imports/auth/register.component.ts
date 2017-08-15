import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import {ValidationService} from './../shared/validation.service';

import template from './register.component.html';

export class RegisterValidators{
	static MatchPassword(AC: AbstractControl):any{
		let password = AC.get('password').value;
		let confirmPassword = AC.get('confirmPassword').value;
		if(password != confirmPassword){
			AC.get('confirmPassword').setErrors({MatchPassword: true})
		}else{
			return null;
		}
	}
}

@Component({
	selector:'error-messages',
	template: `
		<li *ngIf="errorMessage !== null">{{errorMessage}}</li>
	`
})
export class ErrorMessages {
	@Input control: FormControl;
	constructor(){}

	get errorMessage(){
		for(let propertyName in this.control.errors){
			if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
				return ValidationService.getValidatorErrorMEssage(propertyName, this.control.errors[propertyName]);
			}
		}
		return null;
	}
}

@Component({
	template
})
export class RegisterComponent{
	registerForm: FormGroup;

	email: AbstractControl;
	password: AbstractControl;
	confirmPassword: AbstractControl;
	conditions: AbstractControl;

	constructor(
		private router:Router,
		private zone: NgZone,
		private fb: FormBuilder){}

	createForm():void{
		this.registerForm = this.fb.group({
			'email':['', [Validators.required, ValidationService.emailValidator]],
			'password':['',[Validators.required, ValidationService.passwordValidator]],
			'confirmPassWord':['',[Validators.required, ValidationService.passwordValidator]],
			'conditions':['',[Validators.required, ValidationService.acceptConditions]]
		},{
			validator: RegisterValidators.MatchPassword
		});

		this.email = this.registerForm.controls['email'];
		this.password = this.registerForm.controls['password'];
		this.confirmPassword = this.registerForm.controls['confirmPassword'];
		this.conditions = this.registerForm.controls['conditions'];
	}

	ngOnInit():void{
		this.createForm();
	}

	onSubmit(value:any):void{
		if(this.registerForm.valid){
			Accounts.createUser({
				email: this.email.value,
				password: this.password.value
			}, (err) => {
				if(err){
					this.zone.run(() => {
						console.error(err);
					})
				}else{
					this.router.navigate(['/'])
				}
			})
		}
	}
	
}