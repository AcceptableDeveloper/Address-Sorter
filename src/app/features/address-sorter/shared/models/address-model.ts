export class Address {
  streetNum = 0;
  streetName = '';
  fullStreetName = '';
  buildingName = '';
  postCode = '';
  town = '';
  county = '';
  apartmentNum = 0;
  apartmentName = '';
  fullApartmentName = '';
  [key: string]: string | number;
}

export interface ErrorMessage {
  minimumAddress: {
    message: string;
    example: string;
  };
  postcode: {
    message: string;
    example: string;
  };
  street: {
    message: string;
    example: string;
  };
  order: {
    message: string;
    example: string;
  };
}
