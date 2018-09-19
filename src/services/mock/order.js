import Mock from 'mockjs';
import { REMOTE } from '../common';
import { orderList, orderDetail } from '../template/order';

export default function () {
  const queryOrderDetail = {
    success: true,
    code: 200,
    message: '',
    data: {
      orderDetailData: orderDetail,
    },
  };
  const queryOrderList = {
    success: true,
    code: 200,
    message: '',
    data: {
      orderListData: orderList,
    },
  };

  Mock.mock(REMOTE.order.queryOrderDetail, queryOrderDetail);
  Mock.mock(REMOTE.order.queryOrderList, queryOrderList);
}
