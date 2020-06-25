import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  posts = [{
    title: "lol cat told a joke",
    image: "assets/cat1.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Bert",
    timestamp: new Date("2016-12-17T13:24:00")
  },{
    title: "lol cat told another joke",
    image: "assets/cat2.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Patrick",
    timestamp: new Date("2016-12-18T03:45:00")
  },{
    title: "bla bla",
    image: "assets/cat3.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Franz",
    timestamp: new Date("2018-12-17T03:24:00")
  },{
    title: "this is a title",
    image: "assets/cat4.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Georg",
    timestamp: new Date("2019-12-17T03:24:00")
  },{
    title: "hmmm",
    image: "assets/cat5.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    name: "Hans",
    timestamp: new Date("2020-06-24T03:24:00")
  }];
  constructor() { }
  addPost(post) {
    this.posts.push(post);
  }
  getPosts() {
    return this.posts;
  }
  removePost(post) {
    this.posts.splice(this.posts.indexOf(post),1)
  }
  isNew(post) {
    let today = Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    let blogDate = Date.UTC(post.timestamp.getFullYear(), post.timestamp.getMonth(), post.timestamp.getDate());
    if (Math.floor((today - blogDate) / (1000 * 60 * 60 * 24)) <= 2) {
      return true;
    } else {
      return false;
    }
  }
}
