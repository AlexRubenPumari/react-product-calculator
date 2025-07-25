export function addArticleFor (noun) {
  if (!noun) return undefined
  if ('aeiouAEIOU'.includes(noun[0])) return `an ${noun}`

  return `a ${noun}`
}

export function clamp({
  value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY
}) {
  return Math.min(Math.max(value, min), max)
}