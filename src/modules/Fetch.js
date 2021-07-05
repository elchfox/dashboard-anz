
class Fetch {


  async GetFetch(url, params = {}) {

    const data = await fetch(url)
    console.log(data)
    const json = await data.json()
    console.log(json)
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