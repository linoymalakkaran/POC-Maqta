import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MFETodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
  },
  {
    path: 'mfetodo',
    component: MFETodoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
