import Mock from 'mockjs';
import { REMOTE } from '../common';
import { guesscity, hotcity, groupcity } from '../template/home';

export default function () {
  const queryGuesscity = {
    success: true,
    code: 200,
    message: '',
    data: {
      guesscityData: guesscity,
    },
  };
  const queryHotcity = {
    success: true,
    code: 200,
    message: '',
    data: {
      hotcityData: hotcity,
    },
  };
  const queryGroupcity = {
    success: true,
    code: 200,
    message: '',
    data: {
      groupcityData: groupcity,
    },
  };

  Mock.mock(REMOTE.home.queryGuesscity, queryGuesscity);
  Mock.mock(REMOTE.home.queryHotcity, queryHotcity);
  Mock.mock(REMOTE.home.queryGroupcity, queryGroupcity);
}
