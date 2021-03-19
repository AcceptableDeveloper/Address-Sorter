import { Address, ErrorMessage } from '../../models/address-model';

export const addresses: string[] = [
  '10 Delta Ave, Belfast, Co. Antrim, BT2 8HS', // valid 1
  '9 Delta Ave, Belfast, Co. Antrim, BT2 8HS', // valid 2
  'Tech Baths, 17 Lima Ave, Holywood, BT2 8HS', // valid 3
  'Tech Baths, 17 Mima Ave, Holywood, BT2 8HS', // valid 4
  'Star Baths, 17 Lima Ave, Holywood, BT2 8HS', // valid 5
  '20 Delta Ave, Belfast, Co. Antrim, BT2 8HS', // valid 6
  '20 Defying Ave, Belfast, Co. Antrim, BT2 8HS', // valid 7
  'Ormeau Baths, 18 Lima Ave, Belfast, BT2 8HS', // valid 8
  'Tech Baths, 18 Lima Ave, Holywood, BT2 8HS', // valid 9
  'Tech Baths, 19 Lima Ave, Holywood, BT2 8HS', // valid 10
  'Lakeside Baths, 18 Lima Ave, Belfast, BT2 8HS', // valid 11
  '18 Alpha Ave, Belfast, BT2 8HS', // valid 12
  'Volcano Baths, 18 Death Star Ave, Belfast, Co. Antrim, BT2 8HS', // valid 13
  'Volcano Baths, 1 Death Star Ave, Belfast, Co. Antrim, BT2 8HS', // valid 14
  '4 The Front, 37 Shore Road, Holywood, BT18 9GZ', // valid 15
  '12 The Front, 36 Shore Road, Holywood, BT18 9GZ', // valid 16
  '2.4 The Front, 39 Shore Road, Holywood, BT18 9GZ', // valid 17
  '18 Ormeau Ave, Belfast Co. Antrim BT2 8HS', // Invalid 1
  '18 Ormeau Ave, Belfast, Co. Antrim BT2 8HS', // Invalid 2
  'Downing Street, London, SW1A 2AA', // Invalid 3
  'Ormeau Baths, 18 task Ave, Belfast, Co. Antrim', // Invalid 4
  'California Baths, Belfast, BT2 8HS', // Invalid 5
];

export const ErrorMessages: ErrorMessage = {
  minimumAddress: {
    message: 'An address should have a minimum of 3 lines and a maximum of 5 lines, seperated by commas, see example:',
    example: 'Building Name/Apartment(optional), House number/street, Town, County(optional), Postcode',
  },
  postcode: {
    message: 'Postcode is not in the correct format, postcode should look like one of the following:',
    example: 'BT12 3AB or BT1 3AB',
  },
  street: {
    message: 'Invalid street number and name, street address contain number and street name on the same line, see example:',
    example: '12 Park Avenue',
  },
  order: {
    message: 'Town and county are not in the correct order, please see the example',
    example: 'Belfast, Co.Antrim or Belfast, County Antrim',
  },
};

export const exampleAddress: Address = {
  streetNum: 1,
  streetName: 'Buck Road',
  fullStreetName: '12 Buck Road',
  buildingName: 'The Reach',
  postCode: 'BT2 8HS',
  town: 'Belfast',
  county: 'County Antrim',
  apartmentNum: 1,
  apartmentName: '',
  fullApartmentName: '',
};

export const emptyAddress: Address = {
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
