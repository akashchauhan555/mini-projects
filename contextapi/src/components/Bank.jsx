import React from 'react'

function Bank() {
  return (
    <form action="#" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      <label htmlFor="email" className="sr-only">Amount</label>

      <div className="relative">
        <input
          type="number"
          className="w-full rounded-lg border-gray-200 p-4 border text-sm shadow-xs"
          placeholder="Enter amount"
        />
      </div>
    </div>
    <div className="flex items-center justify-between pt-5">
      

      <button
        type="submit"
        className="inline-block rounded-lg bg-rose-500 px-5 py-3 text-sm font-medium text-white"
      >
        Deposit
      </button>
      <button
        type="submit"
        className="inline-block rounded-lg bg-rose-500 px-5 py-3 text-sm font-medium text-white"
      >
        Withdraw
      </button>
    </div>
</form>
  )
}

export default Bank