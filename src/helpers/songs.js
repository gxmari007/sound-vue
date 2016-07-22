import moment from 'moment';
import { genres } from '../locales/music';

const CLIENT_ID = 'f4323c6f7c0cd73d2d786a2b1cdae80c';

export const IMAGE_SIZES = {
  LARGE: 't300x300',
  XLARGE: 't500x500',
};

// 组件用计算属性
export function getPlaylist() {
  const query = this.$route.query;
  return query && query.q ? query.q : genres[0];
}

export function getPlaylistTime() {
  const query = this.$route.query;
  return query && query.t ? query.t : null;
}

// 构建 url
export function constructUrl(category) {
  const catArr = category.split(' - ');
  category = catArr[0];
  let result = `https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${CLIENT_ID}&limit=50&offset=0`;
  if (genres.indexOf(category) !== -1) {
    if (category !== 'house' && category !== 'trance' && category !== 'dubstep') {
      category = `${category} house`;
    }
    result += `&tags=${category}`;
  } else {
    result += `&q=${category}`;
  }
  if (catArr.length > 1) {
    const formattedTime = moment().subtract(catArr[1], 'days').format('YYYY-MM-DD%2012:00:00');
    result += `&created_at[from]=${formattedTime}`;
  }
  return result;
}

export function getImageUrl(url, size = null) {
  if (!url) return '';
  url = url.replace('https:', '');
  switch (size) {
    case IMAGE_SIZES.LARGE:
      return url.replace('large', IMAGE_SIZES.LARGE);
    case IMAGE_SIZES.XLARGE:
      return url.replace('large', IMAGE_SIZES.XLARGE);
    default:
      return url;
  }
}

export function formatSongTitle(title = '') {
  if (!title) {
    return '';
  }
  const arr = title.split(' - ');
  return arr[arr.length - 1].split(' (')[0];
}

export function formatStreamUrl(url) {
  return `${url}?client_id=${CLIENT_ID}`;
}

function padZero(num = 0, size = 0) {
  let str = `${num}`;
  while (str.length < size) {
    str = `0${str}`;
  }
  return str;
}

export function formatSeconds(num = 0) {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
}
