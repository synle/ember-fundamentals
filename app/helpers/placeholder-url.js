import { helper } from '@ember/component/helper';

const IMAGE_URL = 'http://placekitten.com';

export function placeholderUrl(params, hash) {
  const w = Math.max(hash.w || 100, 10);
  const h = Math.max(hash.h || 120, 10);

  return `${IMAGE_URL}/${w}/${h}`;
}

export default helper(placeholderUrl);
