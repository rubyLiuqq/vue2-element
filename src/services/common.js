const REMOTE = {
  address: {
    queryAddress: 'http://localhost:8080/path/address',
  },
  msite: {
    msite: 'http://localhost:8080/path/msite',
  },
  home: {
    queryGuesscity: 'http://localhost:8080/path/guesscity',
    queryHotcity: 'http://localhost:8080/path/hotcity',
    queryGroupcity: 'http://localhost:8080/path/groupcity',
  },
  order: {
    queryOrderDetail: 'http://localhost:8080/path/orderDetail',
    queryOrderList: 'http://localhost:8080/path/orderList',
  },
  food: {
    queryCategory: 'http://localhost:8080/path/category',
    queryDelivery: 'http://localhost:8080/path/delivery',
    queryActivity: 'http://localhost:8080/path/activity',
  },
  hongbao: {
    queryDataList: 'http://localhost:8080/path/dataList',
    queryExpired: 'http://localhost:8080/path/expired',
    queryExchange: 'http://localhost:8080/path/exchange',
  },
};

module.exports = {
  REMOTE,
};
