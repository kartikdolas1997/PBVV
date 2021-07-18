import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EportalComponent } from './components/eportal/eportal.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { ResultsComponent } from './components/results/results.component';
import { HomeComponent } from './components/home/home.component';
// import { OtploginComponent } from './otplogin/otplogin.component';



const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'portal', component : EportalComponent},
  {path: 'customize', component : CustomizeComponent},
  {path: 'results', component : ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
