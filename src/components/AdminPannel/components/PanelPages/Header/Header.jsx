import React from 'react'
import Layout from '../../Layout/Layout'

function Header() {
  return (
    <div>
        <Layout>
            <InnerContant />
        </Layout>
    </div>
  )
}

function InnerContant(){
    return(
        <div>
            Inner Header
        </div>
    )
}

export default Header