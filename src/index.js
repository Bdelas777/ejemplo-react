import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(){
    return <h1>Hola mundo</h1>
}
root.render(<div>
    {Greeting()}
</div>)