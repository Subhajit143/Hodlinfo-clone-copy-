import React from 'react'

const Drop2 = ({ currencies = ["BTC","ETH","USDT","XRP","TRX","DASH","ZEC","XEM","ISOT","WIN","BTT","WRX"], selectedCategory, onchange }) => {
  return   (
    <div className="m-4 ">
      
      <select
        name="currency"
        id="currency"
        value={selectedCategory}
        onChange={onchange}
        className="w-full px-3 py-2  bg-slate-800 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
        required
      >

        <option value="" disabled>BTC</option>
        {currencies.length>0 &&
        currencies.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))
        }
      </select>
    </div>
  );
}

export default Drop2