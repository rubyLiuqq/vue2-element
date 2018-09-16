import Mock from 'mockjs';
import { REMOTE } from '../common';
import { address } from '../template/address';

export default function () {
  const queryAddress = {
    success: true,
    code: 200,
    message: '',
    data: {
      addressData: address,
    },
  };

  Mock.mock(REMOTE.address.queryAddress, queryAddress);
}
