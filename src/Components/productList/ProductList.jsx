import Product from "./Product"
import "./productList.css"
import { products } from "../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title"> Create & Inspire. It's Sushant</h1>
            <p className="pl-desc">
                creative portfolio list
            </p>

        </div>
        <div className="pl-list">
          {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}   
        </div>
      
    </div>
  )
}

export default ProductList
