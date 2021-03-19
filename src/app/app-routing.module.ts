import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressContainerComponent } from './features/address-sorter/views/address-container/address-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: AddressContainerComponent,
  },
  {
    path: '**',
    component: AddressContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
