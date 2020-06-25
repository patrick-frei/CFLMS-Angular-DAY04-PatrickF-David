import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  submitted = false;
  valid = false;
  imageString;
  post = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    timestamp: new FormControl()
  });
  constructor(private blogpostService: BlogpostService) { }

  ngOnInit(): void {
  }

  convertImage(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onload = () => {
      this.imageString = reader.result;
    }
    reader.readAsDataURL(file);
  }


  onSubmit() {
    this.submitted = true;
    this.valid = this.post.valid;
    if (this.valid) {
      this.post.value.timestamp = new Date();
      this.post.value.image = this.imageString;
      this.blogpostService.addPost(this.post.value);
      console.log(this.post.value);
      this.post.reset();
    }
    setTimeout(() => {
      this.submitted = false;
      this.valid = false;
    }, 2000);
  }

}
