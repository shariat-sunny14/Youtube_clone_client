import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { VideosPlayingComponent } from './videos-playing/videos-playing.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: 'all_vidos_list', pathMatch: 'full' },
  { path: 'all_vidos_list', component: VideosComponent },
  { path: 'videos_playing/:id', component: VideosPlayingComponent },
  { path: 'search/:query', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
