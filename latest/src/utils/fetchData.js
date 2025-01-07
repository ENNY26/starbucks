export const recipeOptions  = {
    method: 'GET',
    url: 'https://starbucks-coffee-db2.p.rapidapi.com/api/recipes',
    qs: {name: 'mocha'},
    headers: {

    },
      headers: {
      'x-rapidapi-key': 'd3906decfdmsh384a5ec5cb7a21bp165315jsn4bd87703193e',
      'x-rapidapi-host': 'starbucks-coffee-db2.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) =>{
    const response = await fetch (url, options)
    const data = await response.json()

    return data;
}