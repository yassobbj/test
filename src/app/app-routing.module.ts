import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'archives', component: ArchivesComponent },
   { path: 'albums', component: ListAlbumsComponent },
  { path: 'add-album', component: AddAlbumComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
