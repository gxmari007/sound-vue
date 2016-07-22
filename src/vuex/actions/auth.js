import Cookies from 'js-cookie';

const COOKIE_NAME = 'soundvue';

export function initAuth({ dispatch }) {
  const token = Cookies.get(COOKIE_NAME);
  if (token) {
  }
}
