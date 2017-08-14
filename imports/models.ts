import { Meteor } from 'meteor/meteor';


export enum UserType {
  ADMIN = <any>'admin',
  NORMAL = <any>'normal'
}

export interface User extends Meteor.User {
  profile?: Profile;
}

export interface Certificates {
  cer_file?: string;
  key_file?: string;
  serial_number?: string;
  expiration_date?: string;
  password?: string;
}

export interface File {
  _id?: string;
  complete?: boolean;
  extension?: string;
  name?: string;
  progress?: number;
  size?: number;
  store?: string;
  token?: string;
  type?: string;
  uploadedAt?: Date;
  uploading?: boolean;
  url?: string;
  userId?: string;
}

export interface Address {
  _id?: string;
  street?: string;
  num_ext?: number;
  num_int?: number;
  colony?: string;
  postal_code?: number;
  location?: string;
  city?: string;
  state?: string;
  country?: string;
  reference?: string;
}

export interface Profile{
  rfc?: string;
  name?: string;
  address?: string;
  telephone?: number;
  fax?: number;
  web?: string;
  gln?: string;
}
