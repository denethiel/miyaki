import { Meteor } from 'meteor/meteor';
import { Profile } from '../imports/models';
import { check, Match } from 'meteor/check';

const nonEmptyString = Match.Where((str) => {
  check(str, String);
  return str.length > 0;
})

Meteor.methods({
  updateProfile(profile: Profile):void{
    if(!this.userId) {
      throw new Meteor.Error('unauthorized','User Must be logged-in to update that');
    }

    //check pendiente

    Meteor.users.update(this.userId,{
      $set: {profile}
    });
  }

})
