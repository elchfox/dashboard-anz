import React, {useState} from 'react';
import {  useObserver } from "mobx-react";
import { GeneralStore } from '../stores';

import { AiOutlineCloseCircle} from "react-icons/ai";
import { toJS } from 'mobx';
const initialInfo = {
    name:null,
    app_type:'Unreal based app',
    active:false,
    app_secret:null,
    impressions:null,
    revenue:null
}
const Form = ({onCancel}) => {

    const [info, setInfo] = useState(GeneralStore.statusEditData !== "create" ? 
    toJS(GeneralStore.dataJson[GeneralStore.selectItem]): initialInfo)
    console.log(info)
    const onSubmit = (e)=> {
        e.preventDefault()
        if(GeneralStore.statusEditData !== "create"){
            GeneralStore.onEdit(info)
        }else{GeneralStore.onSubmit(info)}
        onCancel(false)
    }

    const onChange =(key,text)=> {
        setInfo({
             ...info,
            [key]:text
        })
    }
    const onSwitch = (item)=> {
        if(item.type === 'options'){
            return <select id={`id-${item.field}`}
            onChange={(e)=> onChange(item.field, e.target.value)}
            value={info[item.field]} name={item.field}>
            {item.options.map((option)=> <option value={option.value}>{option.label}</option>) }
        </select>
        }else{
            return <input id={`id-${item.field}`} type={item.type} 
            onChange={(e)=> onChange(item.field,item.type === "number" ? Number(e.target.value): e.target.value)}
            value={info[item.field]} readOnly={GeneralStore.statusEditData !== "create" && item.readOnly} 
            name={item.field} />    
        }
    }

    return  useObserver(()=>
    <div className={"modal centring"}>
        <form>
            <div  className={'close'} onClick={()=> onCancel(false)}>
                <AiOutlineCloseCircle/>
            </div>    
            {GeneralStore.parts.form.fields.map((item)=> 
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-${item.field}`} className={"form-label space-right"}>{item.field}:</label>
                    {onSwitch(item)}
                </div>
            
                
            )}
            <div className={'row'}>
                        <button className={"btn success"}  onClick={(e)=> onSubmit(e)}>Submit</button>
                        <button className={"btn danger"} onClick={()=> onCancel(false)}>Cancle</button>
            </div>
        </form>
    </div>
    );
};





export default Form;