import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComecarComponent } from './comecar/comecar.component';
import { LocaisComponent } from './locais/locais.component';

const routes: Routes = [

{path:'', redirectTo:'body', pathMatch: 'full'},
{path:'locais' , component:LocaisComponent},
{path:'comecar', component:ComecarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
