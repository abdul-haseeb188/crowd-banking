import React from 'react';
import ReactDOM From 'react-dom';

Const Dicla = ['CCT','Zone','AS-telecom'];

class Dicla extends React.Component{
render(){
    return <ol> 
    
{Dicla.map((Dicla, index)=> <li key = {index}> {Dicla} </li>)}
   </ol>


}
}

class Bicla extends React.Component{
render(){
return <h1>company list</h1>

}
}
 Class gather extends React.Component{
render(){

return 

<div>
<Dicla/>
<Bicla/>
</div>


}

 } 
ReactDOM.render(element,document.getElementById('root'));