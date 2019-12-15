import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularComponent } from './pages/angular/angular.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'angular',
        component: AngularComponent
      },
      {
        path: '**',
        redirectTo: 'angular',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
