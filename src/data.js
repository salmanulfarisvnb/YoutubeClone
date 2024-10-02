export const api_key = "AIzaSyCLbxN0o1hZ9sJCf0Cg-Ek0slASxEMESBA";

export function convertCount(count) {
  if (count >= 1000000) {
    return Math.floor(count / 1000000) + " M";
  } else if (count >= 1000) {
    return Math.floor(count / 1000) + " K";
  } else {
    return count;
  }
}
