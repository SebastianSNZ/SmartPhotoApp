import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { GetInComponent } from './get-in/get-in.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';


const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: 'photo/:id',
    component: PhotoViewComponent
  },
  {
    path: 'login',
    component: GetInComponent
  },
  {
    path: 'myphotos',
    component: MyGalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
