import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
const Refund = () => {
  return (
  <HomeLayout>
    <div className="container flex sm:h-[100vh] text-white flex-col justify-center items-center mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        Thank you for shopping at 30dayscoding.com.
      </p>
      <h2 className="text-xl font-semibold mb-2">Non-tangible irrevocable goods ("Digital products")</h2>
      <p className="mb-4">
        We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent.
      </p>
      <p>
        For courses, a refund can only be issued within 48 hours of purchase; as everything is managed by Graphy, we won't be able to issue any refund after that.
      </p>
    </div>
  </HomeLayout>
  )
}

export default Refund
