import { Component, OnInit } from '@angular/core';
import { Address } from '../../shared/models/address-model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-address-container',
  templateUrl: './address-container.component.html',
  styleUrls: ['./address-container.component.css'],
})
export class AddressContainerComponent implements OnInit {
  addressData: Address[] = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.addressData = this.getAddresses();
    if (this.addressData) {
      this.setAddressNumAndName();
    }
  }

  /**
   * Makes the call the method in the service to being retreiving/validating the addresses
   */
  getAddresses(): Address[] {
    return this.data.validateAddress();
  }

  /**
   * Method sets seperate number and name properties for easier sorting in the address component so that
   * the address component can be kept as clean as possible without having to extract street numbers.
   */
  setAddressNumAndName(): void {
    for (const address of this.addressData) {
      address.streetNum = parseInt(address.fullStreetName, 10) || 9999;
      address.apartmentNum = parseInt(address.fullApartmentName, 10) || 9999;
      address.streetName = address.fullStreetName.replace(/[0-9]/g, '').trim().toUpperCase();
      address.apartmentName = address.fullApartmentName.replace(/[0-9]/g, '').trim().toUpperCase();
    }
  }
}
