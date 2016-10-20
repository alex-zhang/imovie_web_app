export function newArray(len) {
  if(len > 0) {
    return Array.apply(null, Array(len));
  }

  return [];
}
