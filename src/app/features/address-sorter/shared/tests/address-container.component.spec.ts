/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressContainerComponent } from '../../views/address-container/address-container.component';
import { DataService } from '../services/data.service';
import { exampleAddress } from './mock-data/mock-data';
import { Data } from '@angular/router';

describe('AddressContainerComponent', () => {
  let component: AddressContainerComponent;
  let fixture: ComponentFixture<AddressContainerComponent>;
  let dataServiceMock: DataService;
  const validAddressess = [
    {
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
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddressContainerComponent],
        providers: [{ provide: DataService, useValue: dataServiceMock }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
