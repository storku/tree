//get base website url for each post
export default function getWebsite(url) {
  if (url) {
    const re = /:\/\/[w{3}.]*(.+?)(\/|$)/;
    return url.match(re)[1];
  } else {
    return 'self';
  }
}
