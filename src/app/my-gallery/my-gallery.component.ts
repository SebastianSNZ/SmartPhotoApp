import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {

  newPhoto: any = {
    photo: '',
    extension: '',
    link: 'https://pngimage.net/wp-content/uploads/2018/06/no-image-available-icon-png-7.png'
  };

  searchElement: string = '';

  imageArray: any = [];

  message: string = '';

  selectedFile: File = null;

  user: any = {};

  constructor(private router: Router,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/']);
      return;
    }
    this.user = JSON.parse(localStorage.getItem('userInfo'));
    this.getAllPhotos();
  }

  fileChange(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile == null) {
      this.newPhoto.link = 'https://pngimage.net/wp-content/uploads/2018/06/no-image-available-icon-png-7.png';
      return;
    }
    this.getBase64(this.selectedFile);
  }

  getBase64(file: File) {
    let me = this;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      me.newPhoto.photo = (reader.result as string).split(',').pop();
      me.newPhoto.extension = file.name.split('.').pop();
      me.newPhoto.link = `data:image/${me.newPhoto.extension};base64,${me.newPhoto.photo}`
    };
    reader.onerror = function (error) {
      console.error(error);
    };
  }

  createNewPhoto() {
    if (this.selectedFile == null) return;
    this.message = 'Subiendo archivo...';
    this.newPhoto.link = 'https://galleryappbucket.s3.amazonaws.com/loading.gif'
    this.photoService.postPhoto(
      {
        username: this.user.username,
        photo: this.newPhoto.photo,
        extension: this.newPhoto.extension
      }
    ).subscribe(
      () => {
        this.selectedFile = null;
        this.newPhoto.link = 'https://pngimage.net/wp-content/uploads/2018/06/no-image-available-icon-png-7.png';
        this.message = '';
        this.getAllPhotos();
      },
      (err) => {
        console.error(err);
        this.selectedFile = null;
        this.newPhoto.link = 'https://pngimage.net/wp-content/uploads/2018/06/no-image-available-icon-png-7.png';
        this.message = '';
      }
    );
  }

  getAllPhotos() {
    this.photoService.getPhotosByUser(this.user.username).subscribe(
      (res: any) => this.imageArray = res.Items.reverse(),
      (err) => console.error(err)
    );
  }

  searchPhotos() {
    this.searchElement = this.searchElement.trim();
    if (this.searchElement == '') return;
    this.photoService.searchPhotosByUser({
      username: this.user.username,
      value: this.searchElement
    }).subscribe(
      (res: any) => this.imageArray = res.reverse(),
      err => console.error(err)
    )
  }

  viewPhoto(value: string) {
    this.router.navigate([`/photo/${value}`]);
  }

}
