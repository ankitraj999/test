import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../model/userProfile';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class DataAccessLayerService {

  baseUrl1 = "http://localhost:3000/"

  constructor(private http:HttpClient) { }


  regdataAdd(user:any){
    return this.http.post(this.baseUrl1+"userLogin",user)

  }
  getUser(){
    return this.http.get<any>(this.baseUrl1+"userLogin")

  }
  getUserDetails(){
    return this.http.get<any>(this.baseUrl1+"userDetails")

  }
  

  storeMsg(msg:any){
    return this.http.post(this.baseUrl1+"Messages",msg)

  }
  
  retriveMsg(){
    return this.http.get<any>(this.baseUrl1+"Messages")

  }

  //user resgiter service
  baseurl2 = "http://localhost:3000/api/users/";
  

  register(userData: UserProfile) {
    return this.http.post<{
      email: "";
      user: "";
    }>("http://localhost:3000/api/users/register", userData);
  }
  login(loginData) {
    return this.http.post<{
      userid: "";
      email: "";
      password: "";
      username:""
    }>("http://localhost:3000/api/users/login", loginData);
  }

  creatProfile(userProfile) {
    console.log(userProfile);
    return this.http.post(
      "http://localhost:3000/api/useProfile/creatProfile",
      userProfile
    );
  }
  getAllProfile() {
  
    return this.http.get<UserProfile[]>(
      "http://localhost:3000/api/useProfile/getallProfiles"
    );
  }
  getProfile(id) {
  
    return this.http.get<UserProfile>(
      "http://localhost:3000/api/useProfile/getProfile/"+id
    );
  }

  updateProfile(userProfile,id) {
  
    return this.http.put("http://localhost:3000/api/useProfile/updateProfile/"+id,userProfile);
  }

  //post
  baseurl = "http://localhost:3000/api/";
  
  getposts() {
    return this.http.get<Post[]>(this.baseurl + "getposts");
  }
  sendPost(newPost) {
    console.log(newPost);
    return this.http.post(this.baseurl + "post", newPost);
  }
  comment(post, id) {
    console.log(post);
    return this.http.put(this.baseurl + "addcomment/" + id, post);
  }
  getPostById(id) {
    return this.http.get<Post>(this.baseurl + "postbyid/" + id);
  } 
}
