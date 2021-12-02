import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getApi } from '../../services'

type Product = {
  id: number
  name: string
  price: number
}

type Props = {
  product: Product
}

const api = getApi('loginApi')

export default function Product({ product }: Props): JSX.Element {
  const { isFallback } = useRouter()

  if(isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <strong>Nome: {product.name}</strong> <br />
      <span>Preço: {product.price}</span> <br />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await api.get<Product[]>('products')
  const paths = products.map(product => ({
    params: { productId: String(product.id) }
  }))
  
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { productId } = context.params
  const { data: product } = await api(`products/${productId}`)
  return { props: { product } }
}