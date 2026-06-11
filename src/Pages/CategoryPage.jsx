export default function CategoryPage({go}){

const categories=[

{
name:"Crochet",
img:"/crochet.jpg"
},

{
name:"Wooden Crafts",
img:"/horse.jpg"
},

{
name:"Clothing",
img:"/cloth.jpg"
},

{
name:"Pottery",
img:"/pottery.jpg"
},

{
name:"Bath & Body",
img:"/soap.jpg"
},

{
name:"Home Decor",
img:"/camel.jpg"
}

]

return(

<div

style={{

background:
"linear-gradient(to bottom,#F8F0E7,#F4EEDC)",

minHeight:"100vh",

padding:"40px"

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

fontSize:"54px",

color:"#295D8E",

fontFamily:
'"Segoe Script",cursive'

}}

>

Explore Categories

</h1>

<button

onClick={()=>go("home")}

style={{

padding:"14px 24px",

border:"none",

background:"#295D8E",

color:"white",

borderRadius:"999px"

}}

>

Home

</button>

</div>





<p

style={{

color:"#857B73",

fontSize:"22px",

marginBottom:"40px"

}}

>

Choose your handmade world

</p>






<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(3,1fr)",

gap:"32px"

}}

>

{

categories.map((x)=>(

<div

key={x.name}

onClick={()=>go("products")}

style={{

cursor:"pointer",

background:"white",

borderRadius:"40px",

overflow:"hidden",

boxShadow:

"0 20px 40px rgba(0,0,0,.06)"

}}

>

<img

src={x.img}

style={{

width:"100%",

height:"320px",

objectFit:"cover"

}}

/>

<div

style={{

padding:"28px"

}}

>

<h2

style={{

fontSize:"30px",

color:"#4F4843"

}}

>

{x.name}

</h2>

<p

style={{

color:"#888"

}}

>

Discover handmade treasures

</p>

<button

style={{

marginTop:"16px",

padding:"12px 26px",

background:"#295D8E",

border:"none",

color:"white",

borderRadius:"999px"

}}

>

Explore

</button>

</div>

</div>

))

}

</div>

</div>

)

}