import Fetch from "./Fetch"

class General {
 /* Get users By limit 50 */
  radius = 50000
 async GetRestaurants() {

    return await  Fetch.GetFetch(`/restaurant`)

  }

  async getData(id, contentType) {

    return await  Fetch.GetFetch(`/${contentType}/details/${id}`)
  }

  
  async NearMe(location = [], contentType,params = {page: 0}) {
    let lat =   location.length > 0 ?  location[0] : 0;
    let lng =   location.length > 0 ?  location[1] : 0;
    let newParams = { lat, lng,radius:this.radius,...params}

    return await Fetch.GetFetch(`/${contentType}/nearme`,newParams)
  }
}

export default new General();