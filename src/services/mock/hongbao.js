import Mock from 'mockjs';
import { REMOTE } from '../common';
import { dataList, expired, exchange } from '../template/hongbao';

export default function () {
  const queryDataList = {
    success: true,
    code: 200,
    message: '',
    data: {
      dataListData: dataList,
    },
  };
  const queryExpired = {
    success: true,
    code: 200,
    message: '',
    data: {
      expiredData: expired,
    },
  };
  const queryExchange = {
    success: true,
    code: 200,
    message: '',
    data: {
      exchangeData: exchange,
    },
  };

  Mock.mock(REMOTE.hongbao.queryDataList, queryDataList);
  Mock.mock(REMOTE.hongbao.queryExpired, queryExpired);
  Mock.mock(REMOTE.hongbao.queryExchange, queryExchange);
}
