import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postList: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  getPostsData() {
    console.log('getPostsData');
    this.postService.getPosts().subscribe((posts) => {
      this.postList = posts;
    });
  }
}
