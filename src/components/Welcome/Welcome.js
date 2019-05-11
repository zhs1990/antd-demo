import React,{Component} from "react"
import "./Welcome.less"
export default class Resource extends Component{
    render(){
        return (
            <div id="Resource">
                <img src={require("../../assets/welcome.jpg")} className="welcome" />
                <p className="welcomeWord">WELCOME</p>
            </div>
        )
    }
}