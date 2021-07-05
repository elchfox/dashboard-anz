import { makeAutoObservable, runInAction, toJS} from "mobx"
import config from '../front_lead_home_assignment';
import General from "../modules/General";


class GeneralStore {
  parts  = {}
   dataJson = []
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
    }

   initialConfig = ()=> {
     runInAction(async ()=> {
      this.dataJson =  await General.getData()
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
      runInAction(async ()=> {
        this.sortName = keyName
        let res = await General.getData()

       let sorted =  res.sort((a,b)=> {
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

      runInAction(async ()=> {
        let res = await General.getData()

        res.unshift(data)
       this.dataJson = [...res]

      })
     }
     onEdit = (data)=> {
      runInAction(async ()=> {
        let res = await General.getData()
       let indexOf =   res.findIndex((e)=> e._id === this.dataSelected)
       res[indexOf] = data
       this.dataJson = [...res]

      })
     }
     onSelect = (_id)=> {
      runInAction(async ()=> {
        let res = await General.getData()

      this.selectId = _id
     this.dataSelected =  res.find((e)=> e._id === _id)
      })
     }
}

export default  new GeneralStore();
