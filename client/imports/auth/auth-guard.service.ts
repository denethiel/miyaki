import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Meteor} from 'meteor/meteor'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router){}

	canActivate(){
		if(! Meteor.userId()){
			this.router.navigate(['/login']);
			return false;
		}
		return true;
	}
}