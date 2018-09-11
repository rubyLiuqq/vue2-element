import Mock from 'mockjs';
import { REMOTE } from '../common.js';
import addressData from '../template/address.js';

export default function () {
  var queryAddress = {
    'success': true,
    'code': 200,
    'message': '',
    'data': {
      'address': addressData
    }
  };
  Mock.mock(new RegExp(REMOTE.address.queryAddress), queryAddress);
};
