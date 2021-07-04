import { makeAutoObservable, runInAction, toJS} from "mobx"
import config from '../front_lead_home_assignment';
import FetchData from '../data'


class GeneralStore {
  parts  = {}
   dataJson = [...FetchData]
  limit = 20
  currentPage = 0
  statusEditData = "create"
  maxPage = 0
  dataSelected = null;
  selectId = null
  start =  0
  end = 20
  descending = 0;
  sortName = null
  loading = false
  redirect = null
    constructor() {
        makeAutoObservable(this)
        console.log(FetchData.length)
    }

   initialConfig = ()=> {
     runInAction(()=> {
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
    onChangePage = (num)=> {
      runInAction(()=> {
        this.currentPage = num 
       this.maxPage =  parseInt((this.dataJson.length / this.limit) + 1)
       this.start =  this.limit * this.currentPage
       this.end = this.start + this.limit
      })
     }
     onSort = (keyName,descending)=> {
      runInAction(()=> {
        this.sortName = keyName
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
     onSubmit = (data)=> {

      runInAction(()=> {
        FetchData.unshift(data)
       this.dataJson = [...FetchData]

      })
     }
     onEdit = (data)=> {
      runInAction(()=> {
       let indexOf =  FetchData.findIndex((e)=> e._id === this.dataSelected)
        FetchData[indexOf] = data
       this.dataJson = [...FetchData]

      })
     }
     onSelect = (_id)=> {
      runInAction(()=> {
      this.selectId = _id
     this.dataSelected =  FetchData.find((e)=> e._id === _id)
     console.log(toJS(this.dataSelected))
      })
     }
}

export default  new GeneralStore();
