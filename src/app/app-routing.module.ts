import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GracefulComponent } from './graceful/graceful.component';
import { RosaryComponent } from './rosary/rosary.component';

const routes: Routes = [
  { path: 'rosary', component: RosaryComponent },
  { path: 'graceful', component: GracefulComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
