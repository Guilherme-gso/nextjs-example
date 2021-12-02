import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getApi } from '../../services'

type Product = {
  id: number
  name: string
  price: number
}

type Props = {
  products: Product[]
}

const api = getApi('loginApi')

export default function Products({ products }: Props): JSX.Element {
  return (
   <div>
     {products.map(product => (
       <div key={product.id}>
         <strong>Nome: {product.name}</strong> <br />
         <span>Preço: {product.price}</span> <br />
         <Link href={`products/${product.id}`}>
          <a>Ver produto</a>
         </Link>
       </div>
     ))}
   </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<Product>('products')
  return { props: { products: data }, revalidate: 20 }
}