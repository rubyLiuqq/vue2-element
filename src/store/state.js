import { checkLogin, getUserInfo } from '../config/util';

const state = {
  userInfo: getUserInfo(),
  // 全局loading状态
  isLogin: checkLogin(),
  currentCity: '',
  currentStGeohash: '',
};

export default state;
