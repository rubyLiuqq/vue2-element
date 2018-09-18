import Cookies from 'js-cookie';

const loginFlag = '_islogin';
const cookieUserFlag = 'elementUserFlag';

const checkLogin = () => Cookies.get(loginFlag) || false;
const getUserInfo = () => {
  try {
    return JSON.parse(unescape(Cookies.get(cookieUserFlag)));
  } catch (e) {
    return {};
  }
};

export {
  checkLogin,
  getUserInfo,
};
