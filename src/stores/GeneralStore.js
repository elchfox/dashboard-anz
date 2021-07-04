import { makeAutoObservable, runInAction, toJS} from "mobx"
import config from '../front_lead_home_assignment';

const FetchData = [
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
      {
      name: "name",
      app_secret: "app secret",
      app_type: "game 2",
      active: false,
      impressions:1,
      revenue: 1000
  },
      {name: "name 3",
      app_secret: "app secret",
      app_type: "game 3",
      active: true,
      impressions:1,
      revenue: 15000},
      {name: "name",
      app_secret: "app secret",
      app_type: "game 4",
      active: true,
      impressions:0,
      revenue: 15000},
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
      {
      name: "name",
      app_secret: "app secret",
      app_type: "game 2",
      active: false,
      impressions:1,
      revenue: 1000
  },
      {name: "name 3",
      app_secret: "app secret",
      app_type: "game 3",
      active: true,
      impressions:1,
      revenue: 15000},
      {name: "name",
      app_secret: "app secret",
      app_type: "game 4",
      active: true,
      impressions:0,
      revenue: 15000},
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
      {
      name: "name",
      app_secret: "app secret",
      app_type: "game 2",
      active: false,
      impressions:1,
      revenue: 1000
  },
      {name: "name 3",
      app_secret: "app secret",
      app_type: "game 3",
      active: true,
      impressions:1,
      revenue: 15000},
      {name: "name",
      app_secret: "app secret",
      app_type: "game 4",
      active: true,
      impressions:0,
      revenue: 15000},
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
      {
      name: "name",
      app_secret: "app secret",
      app_type: "game 2",
      active: false,
      impressions:1,
      revenue: 1000
  },
      {name: "name 3",
      app_secret: "app secret",
      app_type: "game 3",
      active: true,
      impressions:1,
      revenue: 15000},
      {name: "name",
      app_secret: "app secret",
      app_type: "game 4",
      active: true,
      impressions:0,
      revenue: 15000},
  {
      name: "name",
      app_secret: "app secret",
      app_type: "game",
      active: true,
      impressions:0,
      revenue: 15000},
      {
      name: "name",
      app_secret: "app secret",
      app_type: "game 2",
      active: false,
      impressions:1,
      revenue: 1000
  },
      {name: "name 3",
      app_secret: "app secret",
      app_type: "game 3",
      active: true,
      impressions:1,
      revenue: 15000},
      {name: "name",
      app_secret: "app secret",
      app_type: "game 4",
      active: true,
      impressions:0,
      revenue: 15000},
  ]
class GeneralStore {
  parts  = {}
   dataJson = [...FetchData]
  limit = 20
  currentPage = 0
  maxPage = 0
  start =  0
  end = 20
  descending = 0;
  loading = false
  redirect = null
    constructor() {
        makeAutoObservable(this)
    }

   initialConfig = ()=> {
     runInAction(()=> {
       console.log(this.dataJson.length)
      this.maxPage =  parseInt((this.dataJson.length / this.limit) + 1)
      this.parts =  config.navigation[0]
      this.redirect =  config.navigation[0].route;
      global.base_url   = config.base_url
      this.loading = true
     })
    }

    onLimit = (num)=> {
      runInAction(()=> {
        this.limit = num
        this.currentPage = 0 
       this.maxPage =  parseInt((this.dataJson.length / this.limit) + 1)
       this.start =  this.limit * this.currentPage
       this.end = this.start + this.limit
      })
     }
     OnChangePage = (num)=> {
      runInAction(()=> {
        this.currentPage = num 
       this.maxPage =  parseInt((this.dataJson.length / this.limit) + 1)
       this.start =  this.limit * this.currentPage
       this.end = this.start + this.limit
      })
     }
     OnSort = (keyName,descending)=> {
      runInAction(()=> {
       let sorted =  FetchData.sort((a,b)=> {
          if(descending  === 1){
            if(a[keyName] < b[keyName]) return -1
          }else{
            if(a[keyName] > b[keyName]) return -1
     
        }
        return 0

      })
       this.dataJson = [...sorted]
       this.descending = descending

      })
     }
}

export default  new GeneralStore();
