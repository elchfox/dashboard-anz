import React, { useState} from 'react';
import {  useObserver } from "mobx-react";
import { GeneralStore } from '../stores';
import { AiOutlineSetting, AiOutlineSync , AiOutlineInbox,AiOutlineFunnelPlot, 
    AiOutlinePlus,
    AiOutlineEdit,
    AiOutlineSend,
    AiFillCaretDown,
    AiFillCaretUp} from "react-icons/ai";
import Form from './Form';


  
const CustomTable = () => {
    const [visible, setVisible] = useState(false)
    const numberWithCommas =  (x) =>{
        var parts = x.toFixed(2).toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    return  useObserver(()=>
        <div className={"table"}>
            <div className={"table-actions row-between"}>
                <div className="row">
                    <div className="btn-action centring"> <AiOutlineSetting style={{fontSize:22}} /> </div>
                    <div className="btn-action centring"> <AiOutlineSync  style={{fontSize:22}} /></div>
                    <div className="btn-action centring"> <AiOutlineInbox style={{fontSize:22}} /></div>
                    <div className="btn-action centring"> <AiOutlineFunnelPlot style={{fontSize:22}} /></div>
                </div>
                <div className="row">
                    <div className="btn-action wapper-action centring" onClick={()=> setVisible(true)}> <AiOutlinePlus style={{fontSize:22}} /> </div>
                    <div className="btn-action wapper-action centring" onClick={()=> {}}> <AiOutlineEdit  style={{fontSize:22}} /></div>
                    <div className="btn-action wapper-action centring" onClick={()=> {}}> <AiOutlineSend style={{fontSize:22}} /></div>
                </div>
            </div>
            <div className={"row-around table-header"}>
                {GeneralStore.parts.table.columns.map((item)=>
                    <div className={"row align-center header-tab"} 
                    onClick={()=> GeneralStore.OnSort(item.field,GeneralStore.descending === 1 ? 2 : 1)}
                    name={item.field}>
                        <b>{item.header}</b>
                        <div className="column box-sort">
                            <AiFillCaretUp className={`arrow-sort ${GeneralStore.descending  === 1? "black" : ""}`}/>
                            <AiFillCaretDown className={`arrow-sort ${GeneralStore.descending === 2 ?"black" : ""}`}/>
                        </div>
                    </div>
                )}

            </div>
            <div className={"table-columns"}>
                
                { GeneralStore.dataJson.slice(GeneralStore.start,GeneralStore.end).map((item,index)=>
                <div className="row-around table-row" key={index}>
                    <div className={"table-column"}>{item.name}</div>
                    <div className={"table-column"}>{item.app_secret}</div>
                    <div className={"table-column"}>{item.app_type}</div>
                    <div className={`table-column ${item.active ? "active-status" :  'inactive-status'}`}>{item.active ? "Active" : "Inactive"}</div>
                    <div className={"table-column"}>{item.impressions}</div>
                    <div className={"table-column"}>${numberWithCommas(item.revenue)}</div>
                </div>
                )}
            </div>
            {visible && <Form onCancel={(visible)=> setVisible(visible)}/>}
        </div>
    );
};





export default CustomTable;