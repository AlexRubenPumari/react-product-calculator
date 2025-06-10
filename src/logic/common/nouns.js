export function addArticleFor (noun) {
  if (!noun) return undefined
  if ('aeiouAEIOU'.includes(noun[0])) return `an ${noun}`

  return `a ${noun}`
}