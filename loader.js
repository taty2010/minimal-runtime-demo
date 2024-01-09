export default function netlifyLoader({ src, width, quality }) {
  const url = new URL(`http://netlify.com/.netlify/images`);
  const params = url.searchParams;
  params.set("url", src);
  params.set("w", width.toString());
  params.set("q", (quality || 75).toString());
  console.debug("HIT THE IMAGE LOADER", url.pathname + url.search);
  return url.pathname + url.search;
}
