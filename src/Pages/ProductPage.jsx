export default function ProductPage({go}){

return(

<div

style={{

background:"#F4EEDC",

minHeight:"100vh",

padding:"50px"

}}

>

<button

onClick={()=>
go("products")
}

style={{

padding:"14px 24px",

background:"#295D8E",

color:"white",

border:"none",

borderRadius:"999px"

}}

>

← Products

</button>

<div

style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"60px",

marginTop:"40px"

}}

>

<img

src="/crochet.jpg"

style={{

width:"100%",

height:"700px",

objectFit:"cover",

borderRadius:"40px"

}}

/>

<div>

<h1

style={{

fontFamily:
'"Segoe Script",cursive',

fontSize:"70px",

color:"#295D8E"

}}

>

Crochet Tulip Bouquet

</h1>

<h2>

₹699

</h2>

<p>

Beautiful handmade crochet flowers.

</p>

<br/>

<p>

⭐ 4.9 Rating

</p>

<p>

Seller:
Kalavista Creator

</p>

<div

style={{

display:"flex",

gap:"20px",

marginTop:"40px"

}}

>

<button

onClick={()=>{

go("cart")

}}

style={{

flex:1,

padding:"18px",

background:"#295D8E",

border:"none",

color:"white",

borderRadius:"999px",

cursor:"pointer"

}}

>

Add Cart

</button>

<button

style={{

flex:1,

padding:"18px",

background:"#D8B390",

border:"none",

borderRadius:"999px"

}}

>

Buy Now

</button>

</div>

</div>

</div>

</div>

)

}
