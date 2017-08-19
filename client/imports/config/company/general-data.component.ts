import {Component, OnInit } from '@angular/core';
import {FormBuilder,
		FormGroup,
		Validators,
		AbstractControl} from '@angular/forms';

import {ValidationService} from './../../shared/validation.service';
import {Profile, User, Address} from './../../../../imports/models';

import {MeteorObservable} from 'meteor-rxjs';

import template from './general-data.component.html';

@Component({
	selector: 'general-data',
	template
})
export class GeneralDataComponent implements OnInit {
	generalDataForm: FormGroup;
	profile: Profile;

	name: AbstractControl;
    rfc: AbstractControl;
    web: AbstractControl;
    gln: AbstractControl;
    street: AbstractControl;
    num_ext: AbstractControl;
    num_int: AbstractControl;
    reference: AbstractControl;
    colony: AbstractControl;
    postal_code: AbstractControl;
    location: AbstractControl;
    city: AbstractControl;
    state: AbstractControl;
    country: AbstractControl;
    email: AbstractControl;
    telephone: AbstractControl;
    fax: AbstractControl;

    editMode : boolean = false;

    constructor(private fb: FormBuilder){}

    isDisabled():boolean{
        return !this.editMode;
    }
    edit():void{
        this.editMode = true;
    }
}