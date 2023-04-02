import Link from "next/link"
const productlist = ({ productId = 100}) => {
  return (
    <>
    <Link href="/">
      Home
    </Link>
     <h2>
     <Link href="/product/1">
       product 1
    </Link>
      </h2>
     <h2>
     <Link href="/product/2">
       product 2
    </Link>
     </h2>
     <h2>
     <Link href="/product/3" replace>
       product 3
    </Link>
     </h2>
     <h2>
     <Link href={`/product/${productId}`}>
       product {productId}
    </Link>
     </h2>
    </>
    
  )
}

export default productlist