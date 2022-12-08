import React,{Component} from "react";
const Hoc=(Component,data)=>{
    return class extends React.Component{
        render(){
            return(
                <div>
                    Hellow<Component/>
                </div>
            )
        }
    }
}
export default Hoc;