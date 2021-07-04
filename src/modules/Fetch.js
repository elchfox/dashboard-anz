
class Fetch {


  async GetFetch(url, params = {}) {
    console.log(url)
    // let query =  Object.entries(params).filter(([, value]) =>  value.toString().length > 0   ).map((param)=>   `${param[0]}=${param[1]}`).join("&")    
      console.log(`${global.base_url}${url}`)
      let urlTogther = `${global.base_url}${url}`
      // var urlnew = new URL(urlTogther, window.location.protocol + '//' + window.location.host + '/');
      // Object.keys({}).forEach(key => url.searchParams.append(key, data[key]));
      let req = new Request(urlTogther)
      // console.log(urlnew)
    const data = await fetch(urlTogther,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    console.log(data)
    const json = await data.text()
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