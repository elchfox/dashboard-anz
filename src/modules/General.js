import Fetch from "./Fetch"
var data = require('../data.json');
class General {


  async getData() {
   return data
    // return await 
  }

  

}

export default new General();