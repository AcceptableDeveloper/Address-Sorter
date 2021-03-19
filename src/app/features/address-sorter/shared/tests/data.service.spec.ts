/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { Data } from '@angular/router';
import { DataService } from '../services/data.service';
import { emptyAddress } from './mock-data/mock-data';

describe('Address Service', () => {
  let dataService: DataService;
  const addressStrings: string[] = ['10 delta Ave, Belfast, Co. Antrim, BT2 8HS', '9 delta Ave, Belfast, Co. Antrim, BT2 8HS'];
  const cleanArray: string[] = ['10 delta Ave', 'Belfast', 'Co. Antrim', 'BT2 8HS'];
  const invalidArray: string[] = ['10 delta Ave', 'BT2 8HS'];
  const addressReset = emptyAddress;
  const validAddress = {
    streetNum: 1,
    streetName: '',
    fullStreetName: '123 test',
    buildingName: '',
    postCode: 'BT8 8HS',
    town: 'Belfast',
    county: '',
    apartmentNum: 0,
    apartmentName: '',
    fullApartmentName: '',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
    });
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  describe('validateAddress Method', () => {
    it('validateAddress should return validAddress array with a length of 2', () => {
      dataService.addresses = addressStrings;
      dataService.validateAddress();
      expect(dataService.validAddresses.length).toBe(addressStrings.length);
    });
  });
  describe('stringToArray Method', () => {
    it('should to return an array of strings', () => {
      const result = dataService.stringToArray(addressStrings[0]);
      expect(result).toEqual(cleanArray);
    });
  });
  describe('checkNumLines Method', () => {
    it('should return false', () => {
      const result = dataService.checkNumOfLines(invalidArray);
      expect(result).toBeFalsy();
    });
  });
  describe('validationDirectory Method', () => {
    it('should reset validAddress', () => {
      const fn = spyOn(dataService, 'resetValidAddress').and.callThrough();
      dataService.validAddress = validAddress;
      dataService.validationDirectory(cleanArray);
      dataService.resetValidAddress();
      expect(fn).toHaveBeenCalled();
      expect(dataService.validAddress).toEqual(addressReset);
    });
    it('should call 4 line validation', () => {
      const fn = spyOn(dataService, 'validateFourLineAddress').and.callThrough();
      dataService.validationDirectory(cleanArray);
      expect(fn).toHaveBeenCalled();
    });
  });
  describe('checkNumLines Method', () => {
    it('should return false', () => {
      const result = dataService.checkNumOfLines(invalidArray);
      expect(result).toBeFalsy();
    });
  });
  describe('isValidPostCode Method', () => {
    it('should return postcode string', () => {
      const result = dataService.isValidPostCode(cleanArray[cleanArray.length - 1]);
      expect(result).toBe(cleanArray[cleanArray.length - 1]);
    });
  });
});
