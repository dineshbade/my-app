  import {Authority} from './authorities';

export class User {
  private userId: number;
  private email: string;
  private password: string;
  private fullName: string;
  private firstName:string;
  private lastName:string;
  private enabled:boolean;
  private token: string;
  private username:string;
  private  authorities=Array<Authority>();
  constructor(userId?: number, email?: string, password?: string, fullName?: string,
               username?:string, firstName?:string,lastName?:string,enabled?:boolean,
               authorities?:Array<Authority>) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.username =username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.authorities=authorities;
  }

  set UserId(userId: number) {
    this.userId = userId;
  }

  set Email(email: string) {
    this.email = email;
  }
  set Password(password: string) {
    this.password = password;
  }
  set FullName(fullName: string) {
    this.fullName = fullName;
  }
  set Token(token: string) {
    this.token = token;
  }
  
  set UserName(username:string){
    this.username =username;
  }
  
  set FirstName(firstName:string){
    this.firstName = firstName;
  }
  
   set LastName(lastName:string){
    this.lastName = lastName;
  }

  set Enabled(enabled:boolean){
    this.enabled = enabled;
  }

  set Authorities(roles:Array<Authority>){
    this.authorities=roles;
  }
  
 
  get FirstName(){
    return this.firstName;
  }
  get LastName(){
   return this.lastName;
  }
  
  get Enabled(){
    return this.enabled;
  }
  get UserName():string{
    return this.username;
  }
  get UserId() :number{
    return this.userId;
  }

  get Email():string {
    return this.email;
  }
  get Password() :string{
    return this.password;
  }
  get FullName() :string{
    return this.fullName;
  }
  get Token() :string{
    return this.token;
  }

  


}
