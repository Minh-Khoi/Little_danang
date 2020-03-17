import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { route } from '../routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      route,
      { useHash: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class ApiRouteModule { }
