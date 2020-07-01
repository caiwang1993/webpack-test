/**
 * Created by cw on 2020/6/28.
 */
/*const config = require('./config.json')*/
import React,{Component} from 'react'
import config from './config.json'
/*
module.exports = function () {
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet
};*/
class Greeter extends Component{
    render(){
        return(
            <div>
            {config.greetText}
            </div>
        );
    }
}
export default Greeter