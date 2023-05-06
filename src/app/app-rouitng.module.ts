import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifDetailComponent, GifListComponent } from '@module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gif-list',
    pathMatch: 'full'
  }, {
    path: 'gif-list',
    component: GifListComponent
  }, {
    path: 'gif-detail',
    component: GifDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouitngModule { }
