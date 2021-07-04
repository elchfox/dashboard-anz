import React, {useState} from 'react';
import {  useObserver } from "mobx-react";
import { GeneralStore } from '../stores';

import { AiOutlineCloseCircle} from "react-icons/ai";
const initialInfo = {
    name:null,
    app_type:[],
    active:false,
    app_secret:null,
    impressions:0,
    revenue:0
}
const options = ["Unreal based app","Unity based app","Farcry based app"]
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

    return  useObserver(()=>
    <div className={"modal centring"}>
        <form>
            <div  className={'close'} onClick={()=> onCancel(false)}>
                <AiOutlineCloseCircle/>
            </div>    
   
                <div className={"row align-center"} style={{marginBottom:10}}>
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
                </div>
            <div className={'row'}>
                        <button className={"btn success"}  onClick={(e)=> onSubmit(e)}>Submit</button>
                        <button className={"btn danger"} onClick={()=> onCancel(false)}>Cancle</button>
            </div>
        </form>
    </div>
    );
};





export default CreateForm;