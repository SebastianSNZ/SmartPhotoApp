import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.css']
})
export class PhotoViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router) { }

    photo: any = {
      path: 'loading.gif',
      tags: []
    }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.photoService.getPhotoById(params.id).subscribe(
      (res: any) => {
        if (res.Count == 0) this.router.navigate(['/']);
        else {
          this.photo = res.Items[0];
          console.log(this.photo);
        }
      },
      err => console.error(err)
    );
  }

}
