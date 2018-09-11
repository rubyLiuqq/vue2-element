import axios from 'axios';
import { REMOTE } from './common';

// 获取首页定位地址
const cityGuess = () => axios.get('/v1/cities', {
  type: 'guess',
});

// 获取首页热门城市
const hotcity = () => axios.get('/v1/cities', {
  type: 'hot',
});

// 获取首页热门城市
const groupcity = () => axios.get('/v1/cities', {
  type: 'group',
});

// 获取当前所在城市
const currentcity = id => axios.get(`/v1/cities/${id}`, {});

// 获取搜索地址
const searchplace = (cityid, value) => axios.get('/v1/pois', {
  type: 'search',
  city_id: cityid,
  keyword: value,
});

// 根据经纬度获取详细定位
const msiteAdress = geohash => axios.get(`/v2/pois/${geohash}`, {});

// 根据msite页面 获取食品分类列表
const msiteFoodTypes = geohash => axios.get('/v2/index_entry', {
  geohash,
  group_type: '1',
  'flags[]': 'F',
});

// 根据msite 获取商铺列表
const shopList = (latitude, longitude, offset, restaurant_category_id, restaurant_category_ids = [], order_by = '', deliveryMode = '', support_ids = []) => {
  let supportStr = '';
  support_ids.forEach((item) => {
    if (item.status) {
      supportStr += `&support_ids[]=${item.id}`;
    }
  });
  const data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    'extras[]': 'activities',
    keyword: '',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': [deliveryMode, supportStr].join(''),
  };
  return axios.post('/shopping/restaurants', data);
};

// 获取search页面搜索结果(搜索餐馆)
const searchRestaurant = (geohash, keyword) => axios.get('/v4/restaurants', {
  'extras[]': 'restaurant_activity',
  geohash,
  keyword,
  type: 'search',
});

// 个人中心里编辑地址
// var getAddressList = (user_id) => axios.get(`/v1/users/${user_id}/addresses`);
const getAddressList = userId => axios.get(REMOTE.address.queryAddress);

export {
  cityGuess,
  hotcity,
  groupcity,
  currentcity,
  searchplace,
  msiteAdress,
  msiteFoodTypes,
  shopList,
  searchRestaurant,
  getAddressList,
};