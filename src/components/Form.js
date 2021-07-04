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
const Form = ({onCancel}) => {

        const [info, setInfo] = useState(initialInfo)
    const onSubmit = ()=> {
        
    }

    const onSwitch = (item)=> {
        if(item.type === 'options'){
            return <select id={`id-${item.field}`} name={item.field}>
            {item.options.map((option)=> <option value={option.value}>{option.label}</option>) }
        </select>
        }else{
            return <input id={`id-${item.field}`} type={item.type} readOnly={item.readOnly} name={item.field} />    
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
                        <button className={"btn success"}  onClick={()=> onSubmit()}>Submit</button>
                        <button className={"btn danger"} onClick={()=> onCancel(false)}>Cancle</button>
            </div>
        </form>
    </div>
    );
};





export default Form;