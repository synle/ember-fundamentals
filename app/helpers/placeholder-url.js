import { helper } from '@ember/component/helper';

const IMAGE_URL = 'http://placekitten.com';


// old
// export function placeholderUrl(_params, hash) {
//   const w = Math.max(hash.w || 100, 10);
//   const h = Math.max(hash.h || 120, 10);

//   return `${IMAGE_URL}/${w}/${h}`;
// }


export function placeholderUrl(_params, {w = 100, h = 120}) {
  w = Math.max(10, w);
  h = Math.max(10, h);

  return `${IMAGE_URL}/${w}/${h}`;
}

export default helper(placeholderUrl);
