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

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(
      (res: any) => this.imageArray = res.Items,
      err => console.error(err)
    )
  }

  viewPhoto(value: string) {
    this.router.navigate([`/photo/${value}`]);
  }

}
