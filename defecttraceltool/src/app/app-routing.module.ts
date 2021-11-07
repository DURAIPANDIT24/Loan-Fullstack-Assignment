import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDefectComponent } from './defect/create-defect/create-defect.component';
import { ListDefectComponent } from './defect/list-defect/list-defect.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent},
  {path :'/listDefect', component : ListDefectComponent },
  {path :'/createDefect', component : CreateDefectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
