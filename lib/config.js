'use strict';

/*
config.js - Configuration for Safecoin Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'Safecoin mainnet',
    bip32: {
      public: '0488B21F',
      private: '0488ADE5'
    },
    pubKeyHash: '3D',
    scriptHash: '56',
    zcPaymentAddressHash: '159A', // Private z-address
    zcSpendingKeyHash: 'AB36', // Spending key
    wif: 'BD'
  },
  testnet: {
    messagePrefix: 'Safecoin testnet',
    bip32: {
      public: '043587cf',
      private: '04358394'
    },
    wif: '80',
    pubKeyHash: '00',
    scriptHash: '05',
    zcPaymentAddressHash: '1451',
    zcSpendingKeyHash: 'b1eb'
  }
};