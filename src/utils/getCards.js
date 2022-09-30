export const getCards = async (api) => {
  const response = await fetch(api)
  const data = await response.json()
  return data.results
}
