import { Injectable } from '@angular/core';
import { Address, ErrorMessage } from '../models/address-model';
import { addresses, ErrorMessages, exampleAddress, emptyAddress } from '../tests/mock-data/mock-data';

@Injectable()
export class DataService {
  addresses: string[] = addresses;
  errorMessages: ErrorMessage = ErrorMessages;
  addressArray: string[] = [];
  validAddresses: Address[] = [];
  validAddress: Address = emptyAddress;
  exampleAddress: Address = exampleAddress;

  constructor() {}

  /**
   * Calls the various methods responsible for handling various validation checks and handles error catching
   * @returns valid addresses to the container component
   */
  validateAddress(): Address[] {
    let addressData: string[] | boolean;

    this.addresses.forEach((address) => {
      try {
        addressData = this.stringToArray(address);
        if (Array.isArray(addressData)) {
          this.validAddresses.push(this.validationDirectory(addressData));
        }
      } catch (error) {
        console.error(error + address);
        this.addresses.splice(this.addresses.indexOf(address), 1);
      }
    });
    return this.validAddresses;
  }

  /**
   * processes each address string into an array of lines and also performs first validation check that an address is at least 3 lines
   * @param address from ValidateAddress()
   * @returns an address or boolean
   */

  stringToArray(address: string): string[] | boolean {
    this.addressArray = address.split(',');
    for (let i = 0; i < this.addressArray.length; i++) {
      this.addressArray[i] = this.addressArray[i].trim();
    }
    return this.checkNumOfLines(this.addressArray);
  }

  checkNumOfLines(address: string[]): string[] | boolean {
    return address.length >= 3 ? address : false;
  }

  /**
   * directs the input address to the correct validation method depending on number of lines
   * @param address from ValidateAddress()
   * @returns valid address
   */

  validationDirectory(address: string[]): Address {
    this.resetValidAddress();
    switch (address.length) {
      case 3:
        return this.validateThreeLineAddress(address);
      case 4:
        return this.validateFourLineAddress(address);
      case 5:
        return this.validateFiveLineAddress(address);
      default:
        return this.exampleAddress;
    }
  }

  /**
   * Reset the valid address so new address can be validated
   */
  resetValidAddress(): void {
    this.validAddress = {
      streetNum: 0,
      streetName: '',
      fullStreetName: '',
      buildingName: '',
      postCode: '',
      town: '',
      county: '',
      apartmentNum: 0,
      apartmentName: '',
      fullApartmentName: '',
    };
  }

  /**
   * Validates 3 line addresses
   * @param address from validationDirectory()
   * @returns valid address
   */
  validateThreeLineAddress(address: string[]): Address {
    this.validAddress.fullStreetName = this.checkIfStreetAddress(address[0]);
    this.validAddress.town = address[1];
    this.validAddress.postCode = this.isValidPostCode(address[2]) ? address[2] : '';
    return this.validAddress;
  }

  /**
   * Validations 4 lines addresses
   * @param address from validationDirectory()
   * @returns valid addresses
   */
  validateFourLineAddress(address: string[]): Address {
    this.validAddress.postCode = this.isValidPostCode(address[3]) ? address[3] : '';
    if (address[1].includes('Co') || address[1].includes('County')) {
      this.setError(this.errorMessages.postcode);
    } else {
      if (!parseInt(address[0], 10)) {
        this.validAddress.buildingName = address[0];
        this.validAddress.fullStreetName = this.checkIfStreetAddress(address[1]);
        this.validAddress.town = address[2];
      } else if (parseInt(address[0], 10) && parseInt(address[1], 10)) {
        this.validAddress.fullApartmentName = address[0];
        this.validAddress.fullStreetName = this.checkIfStreetAddress(address[1]);
        this.validAddress.town = address[2];
      } else if (address[2].includes('Co.') || address[2].includes('County')) {
        this.validAddress.fullStreetName = this.checkIfStreetAddress(address[0]);
        this.validAddress.town = address[1];
        this.validAddress.county = address[2];
      } else {
        this.setError(this.errorMessages.minimumAddress);
      }
    }
    return this.validAddress;
  }

  /**
   * Validations 5 line addresses
   * @param address from validationDirectory()
   * @returns valid addresses
   */
  validateFiveLineAddress(address: string[]): Address {
    this.validAddress.postCode = this.isValidPostCode(address[4]) ? address[4] : '';
    if (address[2].includes('Co') || address[2].includes('County')) {
      this.setError(this.errorMessages.order);
    } else {
      if (!parseInt(address[0], 10)) {
        this.validAddress.buildingName = address[0];
        this.validAddress.fullStreetName = this.checkIfStreetAddress(address[1]);
        this.validAddress.town = address[2];
        this.validAddress.county = address[3];
      } else if (parseInt(address[0], 10) && parseInt(address[1], 10)) {
        this.validAddress.fullApartmentName = address[0];
        this.validAddress.fullStreetName = this.checkIfStreetAddress(address[1]);
        this.validAddress.town = address[2];
        this.validAddress.county = address[3];
      } else {
        this.setError(this.errorMessages.minimumAddress);
      }
    }
    return this.validAddress;
  }

  /**
   * Validates postcode against the UK postcode regex, returns valid postcode, otherwise throws error
   * @param postcode from address validation methods
   * @returns valid postcode
   */
  isValidPostCode(postcode: string): any {
    const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    const hasBT = postcode.indexOf('BT') === 0;
    if (postcodeRegEx.test(postcode) && hasBT) {
      return postcode;
    } else {
      this.setError(this.errorMessages.postcode);
    }
  }

  /**
   * Validates that street number and name are in the correct format, then returns it, otherwise throw error
   * @param address from address validation methods
   * @returns valid street address
   */
  checkIfStreetAddress(street: string): any {
    if (!isNaN(parseInt(street, 10))) {
      return street;
    } else {
      this.setError(this.errorMessages.street);
    }
  }

  /**
   * Sets and throws the error messages
   * @param error from address validation method
   */
  setError(error: any): void {
    throw new Error(`❌ Error: ${error.message}, 👍 Example:${error.example}, Address Used: `);
  }
}
