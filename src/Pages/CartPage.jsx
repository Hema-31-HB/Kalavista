export default function CartPage({go}){

const items=[

{
name:"Crochet Tulip Bouquet",
price:"₹699",
img:"/crochet.jpg"
},

{
name:"Natural Soap",
price:"₹499",
img:"/soap.jpg"
}

]

return(

<div

style={{

background:"#F4EEDC",

minHeight:"100vh",

padding:"50px"

}}

>

<div

style={{

display:"flex",

justifyContent:"space-between"

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

Your Cart

</h1>

<button

onClick={()=>go("products")}

style={{

padding:"12px 24px",

background:"#295D8E",

border:"none",

color:"white",

borderRadius:"999px"

}}

>

← Products

</button>

</div>

{

items.map((x)=>(

<div

key={x.name}

style={{

display:"flex",

gap:"30px",

background:"white",

padding:"20px",

marginTop:"30px",

borderRadius:"30px"

}}

>

<img

src={x.img}

style={{

width:"220px",

height:"220px",

objectFit:"cover",

borderRadius:"24px"

}}

/>

<div>

<h2>

{x.name}

</h2>

<p>

{x.price}

</p>

</div>

</div>

))

}

<h2>

Total ₹1198

</h2>

<button

onClick={()=>go("checkout")}

style={{

padding:"18px 40px",

background:"#295D8E",

color:"white",

border:"none",

borderRadius:"999px"

}}

>

Checkout

</button>

</div>

)

}
