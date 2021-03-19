import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressContainerComponent } from './views/address-container/address-container.component';
import { AddressComponent } from './views/address/address.component';
import { DataService } from './shared/services/data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [AddressContainerComponent, AddressComponent],
  providers: [DataService],
  exports: [AddressContainerComponent],
})
export class AddressModule {}
