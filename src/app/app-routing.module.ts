import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesDetailsComponent } from './components/launches-details/launches-details.component';
import { LaunchesComponent } from './components/launches/launches.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: ':id', component: LaunchesDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
