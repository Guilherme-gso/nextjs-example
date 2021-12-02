import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../mocks/products'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query
  return res.json(products.find(product => String(product.id) === productId))
}