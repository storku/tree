import axios from 'axios'; //used to make AJAX requests
import { GET_DONATION } from './types';

export const getDonation = donations => async dispatch => {
  const {
    donationValue,
    charityOneValue,
    charityTwoValue,
    tipValue
  } = donations;

  const trueCharityOneValue = charityOneValue * donationValue * 0.01;
  const trueCharityTwoValue = charityTwoValue * donationValue * 0.01;
  const trueTipValue = tipValue * donationValue * 0.01;

  const filteredDonations = {};
  filteredDonations['Total Value'] = {
    name: 'Total Value',
    value: donationValue
  };
  filteredDonations['Charity 1'] = {
    name: 'Charity 1',
    value: trueCharityOneValue
  };
  filteredDonations['Charity 2'] = {
    name: 'Charity 2',
    value: trueCharityTwoValue
  };
  filteredDonations['Tip'] = {
    name: 'Tip',
    value: trueTipValue
  };

  dispatch({ type: GET_DONATION, payload: filteredDonations });
};
