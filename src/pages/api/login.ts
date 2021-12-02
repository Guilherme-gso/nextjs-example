import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid'

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  return res.json({
    token: uuid()
  })
}
