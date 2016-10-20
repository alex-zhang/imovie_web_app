export function newArray(len, fn) {
  if(len > 0) {
    return Array.apply(null, Array(len)).map(fn);
  }

  return [];
}
