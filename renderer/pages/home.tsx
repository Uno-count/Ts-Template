import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Sidenavbar from '../components/sidenavbar'

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>TS Template</title>
      </Head>
     <Sidenavbar />
    </React.Fragment>
  )
}
