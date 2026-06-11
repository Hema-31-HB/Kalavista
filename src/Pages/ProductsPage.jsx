export default function ProductsPage({go}){

const products=[

{
name:"Crochet Tulip Bouquet",
price:"₹699",
img:"/crochet.jpg"
},

{
name:"Natural Handmade Soap",
price:"₹499",
img:"/soap.jpg"
},

{
name:"Handmade Pottery",
price:"₹999",
img:"/pottery.jpg"
},

{
name:"Wooden Horse Decor",
price:"₹1899",
img:"/horse.jpg"
},

{
name:"Embroidered Cloth",
price:"₹2499",
img:"/cloth.jpg"
},

{
name:"Traditional Craft",
price:"₹1399",
img:"/camel.jpg"
}

]

return(

<div

style={{

background:"#F4EEDC",

minHeight:"100vh",

padding:"40px"

}}

>

<div

style={{

display:"flex",

justifyContent:"space-between",

marginBottom:"40px"

}}

>

<h1

style={{

fontFamily:
'"Segoe Script",cursive',

fontSize:"58px",

color:"#295D8E"

}}

>

Kalavista

</h1>

<button

onClick={()=>go("categories")}

style={{

padding:"12px 26px",

background:"#295D8E",

border:"none",

color:"white",

borderRadius:"999px"

}}

>

← Categories

</button>

</div>

<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(3,1fr)",

gap:"30px"

}}

>

{

products.map((p)=>(

<div

key={p.name}

onClick={()=>
go("details")
}

style={{

cursor:"pointer",

background:"white",

borderRadius:"35px",

overflow:"hidden",

transition:".3s"

}}

>

<img

src={p.img}

style={{

width:"100%",

height:"350px",

objectFit:"cover"

}}

/>

<div

style={{

padding:"24px"

}}

>

<h2>

{p.name}

</h2>

<p>

{p.price}

</p>

<button

style={{

padding:"14px",

width:"100%",

background:"#295D8E",

color:"white",

border:"none",

borderRadius:"999px"

}}

>

View Product

</button>

</div>

</div>

))

}

</div>

</div>

)

}
