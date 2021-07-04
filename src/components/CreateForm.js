import React, {useState} from 'react';
import {  useObserver } from "mobx-react";
import { GeneralStore } from '../stores';

import { AiOutlineCloseCircle} from "react-icons/ai";
const initialInfo = {
    name:null,
    app_type:'Unreal based app',
    active:false,
    app_secret:null,
    impressions:0,
    revenue:0
}
const CreateForm = ({onCancel}) => {

        const [info, setInfo] = useState(initialInfo)
    const onSubmit = (e)=> {
        e.preventDefault()
        GeneralStore.onSubmit(info)
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
            return <select id={`id-${item.field}`} name={item.field}  onChange={(e)=> onChange(item.field, e.target.value)} >
            {item.options.map((option)=> <option value={option.value}>{option.label}</option>) }
        </select>
        }else{
            return <input id={`id-${item.field}`} type={item.type}  
            onChange={(e)=> onChange(item.field,item.type === "number" ? Number(e.target.value): e.target.value)} 
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
                {/* <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-name`} className={"form-label space-right"}>Name:</label>
                    <input id={`id-name`} type={'text'} onChange={(e)=> onChange("name",e.target.value)}  />
                </div>
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-option`} className={"form-label space-right"}>App_type:</label>
                    <select id={`id-option`}  onChange={(e)=> onChange("app_type",e.target.value)}>
                        {options.map((option)=> <option value={option}>{option}</option>) }
                    </select>
                </div>
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-active`} className={"form-label space-right"}>Active:</label>
                    <input id={`id-active`} type={'checkbox'}  onChange={(e)=> onChange("active",e.target.value)} />
                </div>
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-secret`} className={"form-label space-right"}>Secret:</label>
                    <input id={`id-secret`} type={'text'}  onChange={(e)=> onChange("app_secret",e.target.value)} />
                </div>
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-impressions`} className={"form-label space-right"}>impressions:</label>
                    <input id={`id-impressions`} type={'number'}   onChange={(e)=> onChange("impressions",Number(e.target.value))}   />
                </div>
                <div className={"row align-center"} style={{marginBottom:10}}>
                    <label for={`id-revenue`} className={"form-label space-right"}>revenue:</label>
                    <input id={`id-revenue`} type={'number'}   onChange={(e)=> onChange("revenue",Number(e.target.value))} />
                </div> */}
            <div className={'row'}>
                        <button className={"btn success"}  onClick={(e)=> onSubmit(e)}>Submit</button>
                        <button className={"btn danger"} onClick={()=> onCancel(false)}>Cancle</button>
            </div>
        </form>
    </div>
    );
};





export default CreateForm;