import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private photoService: PhotoService,
    private router: Router) { }

  imageArray: any = [];

  searchElement: string = '';

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.photoService.getPhotos().subscribe(
      (res: any) => this.imageArray = res.Items.reverse(),
      err => console.error(err)
    )
  }

  searchPhoto() {
    this.searchElement = this.searchElement.trim();
    if (this.searchElement == '') {
      this.getAllPhotos();
      return;
    }
    this.photoService.searchPhoto(this.searchElement).subscribe(
      (res: any) => this.imageArray = res.reverse(),
      err => console.error(err)
    )
  }

  viewPhoto(value: string) {
    this.router.navigate([`/photo/${value}`]);
  }




}
