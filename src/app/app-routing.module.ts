import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { ContactComponent} from "./contact/contact.component";
import { GalleryComponent} from "./gallery/gallery.component";

const routes:Routes =[
  {path:"about", component: AboutComponent},
  {path:"contact", component: ContactComponent},
  {path:"gallery", component: GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  
})
export class AppRoutingModule { }
