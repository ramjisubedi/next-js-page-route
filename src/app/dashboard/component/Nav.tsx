import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/"> 
          <h2 className={`mb-3 text-2xl font-semibold px-5`}>
            Home
          </h2>
         
       
        </Link>
       <Link href="/dashboard"> 
          <h2 className={`mb-3 text-2xl font-semibold px-5`}>
            Dashboard
          </h2>
         
       
        </Link>

       <Link href="/dashboard/payment"> 
          <h2 className={`mb-3 text-2xl font-semibold px-5`}>
            Payment
          </h2>
         
       
        </Link>

      </div>
        </>
    )
}
export default Nav
