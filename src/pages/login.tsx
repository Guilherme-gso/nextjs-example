import React from 'react'
import { setCookie } from 'nookies'
import { GetServerSideProps } from 'next'
import { getApi } from '../services/api'

type Props = {
  token: string
}

export default function Login({ token }: Props): JSX.Element {
  return (
    <div>
      <strong>Token: {token}</strong> <br />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const api = getApi('loginApi')
  const { data } = await api.get('/login')
  setCookie(context, 'gsp-user-token', data.token)
  return { props: data }
}