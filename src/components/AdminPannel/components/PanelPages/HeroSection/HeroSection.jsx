import React from 'react'
import Layout from '../../Layout/Layout'

function HeroSection() {
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
            Panel Hero Section
        </div>
    )
}

export default HeroSection