import Mock from 'mockjs';
import { REMOTE } from '../common';
import { category, delivery, activity } from '../template/food';

export default function () {
  const queryCategory = {
    success: true,
    code: 200,
    message: '',
    data: {
      categoryData: category,
    },
  };
  const queryDelivery = {
    success: true,
    code: 200,
    message: '',
    data: {
      deliveryData: delivery,
    },
  };
  const queryActivity = {
    success: true,
    code: 200,
    message: '',
    data: {
      activityData: activity,
    },
  };

  Mock.mock(REMOTE.address.queryCategory, queryCategory);
  Mock.mock(REMOTE.address.queryDelivery, queryDelivery);
  Mock.mock(REMOTE.address.queryActivity, queryActivity);
}
