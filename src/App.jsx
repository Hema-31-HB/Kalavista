import { useState } from "react"

import HomePage from "./Pages/HomePage"
import CategoryPage from "./Pages/CategoryPage"
import ProductsPage from "./Pages/ProductsPage"
import ProductPage from "./Pages/ProductPage"
import CartPage from "./Pages/CartPage"
import CheckoutPage from "./Pages/CheckoutPage"
import SuccessPage from "./Pages/SuccessPage"

export default function App(){

const [page,setPage]=useState("home")

return(

<>

{page==="home"&&<HomePage go={setPage}/>}

{page==="categories"&&<CategoryPage go={setPage}/>}

{page==="products"&&<ProductsPage go={setPage}/>}

{page==="details"&&<ProductPage go={setPage}/>}

{page==="cart"&&<CartPage go={setPage}/>}

{page==="checkout"&&<CheckoutPage go={setPage}/>}

{page==="success"&&<SuccessPage go={setPage}/>}

</>

)

}
