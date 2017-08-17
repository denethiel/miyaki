import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AUTH_DECLARATIONS} from './';
import {LoginComponent} from './login.component';
import {RegisterComponent, ErrorMessages} from './register.component'
import { ModalModule } from 'ngx-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';

import {ValidationService} from './../shared/validation.service'

import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
	imports:[AuthRoutingModule, ReactiveFormsModule, CommonModule, ModalModule.forRoot()],
	declarations:[
		ErrorMessages,
		LoginComponent,
		RegisterComponent,
		],
	providers:[ValidationService]
})
export class AuthModule{}

