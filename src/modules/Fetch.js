
class Fetch {


  async GetFetch(url, params = {}) {

    const data = await fetch(`${global.base_url}${url}`)
    const json = await data.json()

    return json
  }
  
  async PostFetch(url,data) {
      
    const dataJson = await fetch(`${global.base_url}${url}`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await dataJson.json()

    return json
  }

}

export default new Fetch();