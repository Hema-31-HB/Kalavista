export default function SuccessPage({go}){

return(

<div

style={{

background:"#F4EEDC",

minHeight:"100vh",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center"

}}

>

<div

style={{

fontSize:"120px"

}}

>

✨

</div>

<h1

style={{

fontFamily:
'"Segoe Script",cursive',

fontSize:"70px",

color:"#295D8E"

}}

>

Order Confirmed

</h1>

<p

style={{

fontSize:"22px",

color:"#777"

}}

>

Your handmade treasure is being prepared.

</p>

<button

onClick={()=>go("home")}

style={{

marginTop:"40px",

padding:"18px 50px",

background:"#295D8E",

border:"none",

color:"white",

borderRadius:"999px"

}}

>

Back To Kalavista

</button>

</div>

)

}
