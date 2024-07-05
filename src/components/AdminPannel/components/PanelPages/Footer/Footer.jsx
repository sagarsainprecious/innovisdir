import React from 'react'
import Layout from '../../Layout/Layout'

function Footer() {
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
            Panel Footer
        </div>
    )
}

export default Footer