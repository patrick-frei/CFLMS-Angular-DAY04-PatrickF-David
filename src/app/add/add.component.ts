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
  tempImage;
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
    reader.onload = () => {
      this.tempImage = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }


  onSubmit() {
    this.valid = this.post.valid;
    this.submitted = true;
    if (this.valid) {
      this.post.value.timestamp = new Date();
      this.post.value.image = this.tempImage;
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
