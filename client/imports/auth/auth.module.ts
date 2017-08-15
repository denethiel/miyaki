import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AUTH_DECLARATIONS} from './'
import { ReactiveFormsModule } from '@angular/forms';

import {ValidationService} from './../shared/validation.service'

import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
	imports[AuthRoutingModule, ReactiveFormsModule, CommonModule],
	declarations:[AUTH_DECLARATIONS],
	providers:[ValidationService]
})
export class AuthModule{}

