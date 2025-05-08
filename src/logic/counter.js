export function add (value) {
  return value + 1
}
export function decrease (value) {
  if (value - 1 >= 0) return value - 1
  return value
}