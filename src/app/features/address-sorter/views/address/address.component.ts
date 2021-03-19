import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../shared/models/address-model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  @Input() addresses: Address[] = [];
  sortBy = [{ prop: 'town' }, { prop: 'streetName' }, { prop: 'streetNum' }, { prop: 'buildingName' }, { prop: 'apartmentNum' }];

  constructor() {}

  ngOnInit(): void {}

  compare(a: string | number, b: string | number): number {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }

  sortByTown = (address1: any, address2: any): number => {
    const a = address1.town.toUpperCase();
    const b = address2.town.toUpperCase();
    return this.compare(a, b);
  };

  sortByStreetName = (address1: any, address2: any): number => {
    const a = address1.streetName;
    const b = address2.streetName;
    return this.compare(a, b);
  };

  sortByStreetNumber = (address1: any, address2: any): number => {
    const a = address1.streetNum;
    const b = address2.streetNum;
    return this.compare(a, b);
  };

  sortByBuildingName = (address1: any, address2: any): number => {
    const a = address1.buildingName.toUpperCase();
    const b = address2.buildingName.toUpperCase();
    return this.compare(a, b);
  };

  sortByApartmentNumber = (address1: any, address2: any): number => {
    const a = address1.apartmentNum;
    const b = address2.apartmentNum;
    return this.compare(a, b);
  };

  /**
   * Sort function to perform the full sort (by town then street name then street number, then property name, then apartment number)
   * while loop continues loop until neither any a[prop] is bigger or smaller than b[prop], then zero is returned and the list is sorted
   */
  completeSort(): void {
    this.addresses.sort((a, b) => {
      let i = 0;
      let result = 0;
      while (i < this.sortBy.length && result === 0) {
        result = a[this.sortBy[i].prop] < b[this.sortBy[i].prop] ? -1 : a[this.sortBy[i].prop] > b[this.sortBy[i].prop] ? 1 : 0;
        i++;
      }
      return result;
    });
  }
}
