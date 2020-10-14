import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path:"create",component:CreateComponent
  },
  {
     path:"",component:ViewComponent
  },
  {
    path:"View",component:ViewComponent
  },
  {
    path:"update/:id",component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
