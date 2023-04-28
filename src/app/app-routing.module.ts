import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TwoColumnsPageComponent } from './components/pages/two-columns-page/two-columns-page.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TreePageComponent } from './components/pages/tree-page/tree-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'two-columns', component:  TwoColumnsPageComponent},
  { path: 'tree', component:  TreePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
