export default function CheckoutPage({go}){

return(

<div

style={{

background:"#F4EEDC",

minHeight:"100vh",

padding:"50px"

}}

>

<h1

style={{

fontFamily:
'"Segoe Script",cursive',

fontSize:"60px",

color:"#295D8E"

}}

>

Checkout

</h1>

<input

placeholder="Full Name"

style={{

width:"100%",

padding:"20px",

marginBottom:"20px"

}}

/>

<input

placeholder="Phone"

style={{

width:"100%",

padding:"20px",

marginBottom:"20px"

}}

/>

<textarea

placeholder="Address"

style={{

width:"100%",

height:"200px"

}}/>

<br/><br/>

<button

onClick={()=>go("success")}

style={{

padding:"18px 50px",

background:"#295D8E",

color:"white",

border:"none",

borderRadius:"999px"

}}

>

Place Order

</button>

</div>

)

}
