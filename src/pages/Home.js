import React from 'react';
import CustomTable from '../components/CustomTable';

import {  useObserver } from "mobx-react";
import { GeneralStore } from '../stores';

import {BsChevronLeft,BsChevronRight,BsChevronDoubleLeft,BsChevronDoubleRight} from "react-icons/bs";
import { toJS } from 'mobx';

const Home = () => {

        const OnChangePage =(nu)=> {

        }
    return  useObserver(()=>
    <>
        <div className="title-page row-between align-center">
            <h1>{GeneralStore.parts.title}</h1>
            <div className="row align-center">
                <div>
                    <div className="row align-center">
                        <div className={"space-right"}>
                            <span>{GeneralStore.currentPage + 1}</span>-<span>{GeneralStore.maxPage}</span>
                        </div>
                        <div className={"align-center space-right"}>
                            {GeneralStore.currentPage !== 0 && 
                            <> 
                                <BsChevronDoubleLeft onClick={()=>  GeneralStore.OnChangePage(0)}/>
                                <BsChevronLeft onClick={()=>GeneralStore.OnChangePage(GeneralStore.currentPage - 1) }/>
                             </>}
                             {GeneralStore.currentPage + 1 < GeneralStore.maxPage && 
                             <>
                             <BsChevronRight onClick={()=>GeneralStore.OnChangePage(GeneralStore.currentPage + 1)}/>
                            <BsChevronDoubleRight onClick={()=>GeneralStore.OnChangePage(GeneralStore.maxPage - 1)}/>
                            </>}
                        </div>
                    </div>
                </div>
                <select className={"limit-select"} value={GeneralStore.limit} onChange={(e)=> GeneralStore.onLimit(Number(e.target.value))}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select> 
            </div>
        </div>
        <div className={"max-width"}>
         <CustomTable  />
        </div>
    </>
    );
};





export default Home;