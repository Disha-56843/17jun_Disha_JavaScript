import React from 'react'

function Statedemo()
{
    const[name,setName]=usestate("Disha");
    return(
        <>
        <h1>Hii my name is {name}</h1>
       <Button type="button" onClick={()=>{setName("payal")}}>Click to update Name</Button>
       </>
    )
}
export default Statedemo