import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;

  constructor(private blogpostService: BlogpostService) { }
  
  removePost(post) {
    this.blogpostService.removePost(post);
  }
  isNew(post) {
    return this.blogpostService.isNew(post);
  }
  ngOnInit() {
    this.posts = this.blogpostService.getPosts();
  }

}
