import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../mocks/products'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json(products)
}