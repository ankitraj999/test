import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  toggle1: boolean = false;
  loggedUserId = sessionStorage.getItem("loggedUserId");
  post = {
    postedBy: "",
    post: ""
  };

  updatePost: Post;
  posts: Post[] = [];
  constructor(
    private router: Router,
    private userservice: UserServicesService,
  
  ) {}

  ngOnInit() {
    if(sessionStorage.getItem("loggedUserId")==null){
      this.router.navigate([''])
    }
    if (this.loggedUserId) {
      this.display();
    } else {
      this.router.navigate(["userlogin"]);
    }
  }

  //  post it ...........................................................................
  onSubmit(post) {
    console.log(post);
    this.post.post = post;
    this.post.postedBy = sessionStorage.getItem("loggedUserId");
    this.userservice.sendPost(this.post).subscribe(data => {});
  }
  display() {
    this.userservice.getposts().subscribe(data => {
      this.posts = data;
      this.posts = this.posts.reverse();
      for (let pst of this.posts) {
        for (let cmt of pst.comments) {
          this.userservice.getProfile(cmt.commentedBy).subscribe(data => {
            cmt.commentedBy = data.firstName +" "+ data.lastName;
          });
        }
      }
    });
  }
  like(postId) {
    this.userservice.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      if (this.updatePost.likes.indexOf(this.loggedUserId))
        this.updatePost.likes.push(this.loggedUserId);
      console.log(this.updatePost);
      this.userservice.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }
  dislike(postId) {
    this.userservice.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      if (this.updatePost.dislikes.indexOf(this.loggedUserId))
        this.updatePost.dislikes.push(this.loggedUserId);

      this.userservice.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }

  toggle() {
    this.toggle1 = !this.toggle1;
  }

  comment(comment, postId) {
    this.toggle1 = !this.toggle1;

    this.userservice.getPostById(postId).subscribe(data => {
      this.updatePost = data;
      let cmt = {
        commentedBy: this.loggedUserId,
        comment: comment
      };
      this.updatePost.comments.push(cmt);

      this.userservice.comment(this.updatePost, postId).subscribe(data => {
        this.display();
      });
    });
  }

}
