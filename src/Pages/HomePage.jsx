import { useState } from "react";

export default function HomePage({ go }) {

const [mouse,setMouse]=useState({
x:0,
y:0
})

return(

<div

onMouseMove={(e)=>
setMouse({
x:e.clientX,
y:e.clientY
})
}

style={{

width:"100vw",
height:"100vh",

overflow:"hidden",

background:"#F4EEDC",

position:"relative"

}}

>

<div

style={{

position:"absolute",

left:mouse.x-18,

top:mouse.y-18,

width:"36px",

height:"36px",

pointerEvents:"none",

borderRadius:"50%",

background:
"radial-gradient(circle,rgba(180,220,240,.12),transparent)",

filter:"blur(10px)"

}}

></div>







<nav

style={{

display:"flex",

justifyContent:"space-between",

padding:"18px 40px"

}}

>

<div>

<div

style={{

fontFamily:
'"Segoe Script",cursive',

fontSize:"38px",

color:"#245B8F"

}}

>

❦ Kalavista

</div>

<div

style={{

fontSize:"7px",

letterSpacing:"3px",

marginTop:"6px"

}}

>

EVERY PRODUCT TELLS HER STORY

</div>

</div>







<div

style={{

display:"flex",

gap:"42px",

fontWeight:"700",

fontSize:"15px",

color:"#245B8F"

}}

>

<div>Sell</div>

<div>WishList</div>

<div>Cart</div>

</div>

</nav>









<div

style={{

display:"grid",

gridTemplateColumns:
"230px 230px 360px 300px",

gap:"14px",

padding:"6px 34px",

alignItems:"start"

}}

>






<div>

<img

src="/pottery.jpg"

style={{
width:"230px",
height:"230px",
objectFit:"cover"
}}

/>

<div

style={{

display:"flex",

gap:"12px",

marginTop:"12px"

}}

>

<img

src="/crochet.jpg"

style={{
width:"105px",
height:"220px",
objectFit:"cover"
}}

/>

<img

src="/dolls.jpg"

style={{
width:"113px",
height:"220px",
objectFit:"cover"
}}

/>

</div>

</div>










<div>

<img

src="/soap.jpg"

style={{
width:"230px",
height:"230px",
objectFit:"cover"
}}

/>

<div

style={{

display:"flex",

gap:"12px",

marginTop:"12px"

}}

>

<img

src="/horse.jpg"

style={{
width:"105px",
height:"170px",
objectFit:"cover"
}}

/>

<img

src="/embroidery.jpg"

style={{
width:"113px",
height:"170px",
objectFit:"cover"
}}

/>

</div>

</div>










<img

src="/cloth.jpg"

style={{
width:"360px",
height:"460px",
objectFit:"cover"
}}

/>










<img

src="/camel.jpg"

style={{
width:"300px",
height:"460px",
objectFit:"cover"
}}

/>

</div>









<div

style={{

display:"flex",

justifyContent:"center",

marginTop:"-48px"

}}

>

<button

onClick={()=>go("categories")}

style={{

padding:"12px 42px",

border:"none",

background:"#2B5D8F",

color:"white",

borderRadius:"999px",

fontSize:"15px",

cursor:"pointer"

}}

>

Enter

</button>

</div>









<div

style={{

position:"absolute",

right:"88px",

bottom:"52px",

fontFamily:
'"Segoe Script",cursive',

fontSize:"15px",

color:"#87A7C7"

}}

>

love,<br/>

always

</div>

</div>

)

}
