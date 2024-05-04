import { Injectable } from '@angular/core';
import { DataAccessLayerService } from './data-access-layer.service';
import { UserProfile } from '../model/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private dataAccess:DataAccessLayerService) { }

  regdataAdd(user:any){
    return this.dataAccess.regdataAdd(user)

  }
  getUser(){
    return this.dataAccess.getUser()
  }

  storeMsg(msg:any){
     return this.dataAccess.storeMsg(msg)

  }

  retriveMsg(){
    return this.dataAccess.retriveMsg()
  }
  getUserDetials(){
    return  this.dataAccess.getUserDetails();
  }

  //user register
  register(userData: UserProfile){
    return this.dataAccess.register(userData)
  }
  
  login(loginData){
    return this.dataAccess.login(loginData)
  }
  creatProfile(userProfile) {
   
    return this.dataAccess.creatProfile(userProfile)
  }
  getAllProfile() {
  
    return this.dataAccess.getAllProfile()
  }
  getProfile(id) {
  
    return this.dataAccess.getProfile(id)
  }

  updateProfile(userProfile,id) {
  
    return this.dataAccess.updateProfile(userProfile,id)
    
  }

  //post
  getposts() {
    return this.dataAccess.getposts()
  }
  sendPost(newPost) {
    console.log(newPost);
    return this.dataAccess.sendPost(newPost)
  }
  comment(post, id) {
    console.log(post);
    return this.dataAccess.comment(post,id)
  }
  getPostById(id) {
    return this.dataAccess.getPostById(id) 
  } 
}
