import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [ticker, setTicker] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/tickers");
      setTicker(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className=" bg-slate-950 ">
        <div className="flex justify-center py-12">
          <h1 className="font-bold  text-slate-500 text-2xl ">
            Best Price to Trade
          </h1>
        </div>

        <div className="flex justify-between px-24">
          <div>
            <h1 className="font-bold text-4xl text-pr">0.1%</h1>
            <h1 className="text-slate-500">5 min</h1>
          </div>

          <div>
            <h1 className="font-bold text-4xl text-pr">5.3%</h1>
            <h1 className="text-slate-500">5 min</h1>
          </div>

          <div>
            {" "}
            <h1 className="font-bold text-7xl  text-white text-center">
              $ 26,053
            </h1>
            <h1 className="text-slate-500 text-center py-16">
              Average BTC/INR net price including Converssion
            </h1>
          </div>

          <div>
            {" "}
            <h1 className="font-bold text-4xl text-pr">0.1%</h1>
            <h1 className="text-slate-500">5 min</h1>
          </div>

          <div>
            {" "}
            <h1 className="font-bold text-4xl text-pr">0.1%</h1>
            <h1 className="text-slate-500">5 min</h1>
          </div>
        </div>

        <div class="overflow-x-auto p-10">
          <table class="min-w-full  bg-slate-950  shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr class=" bg-slate-950  text-gray-500 font-bold uppercase text-xl leading-normal">
                <th class="py-3 px-6 text-center">#</th>
                <th class="py-3 px-6 text-center">Last Trade Price</th>
                <th class="py-3 px-6 text-center">Buy Price/Sell Price</th>
                <th class="py-3 px-6 text-center">Difference</th>
                <th class="py-3 px-6 text-center">Savings</th>
              </tr>
            </thead>
            <tbody className="w-full h-full border-separate border-spacing-x-4 border-spacing-y-2">
              {/* <tr class="p-2 border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">1</td>
                <td class="py-3 px-6 text-left">$1,200</td>
                <td class="py-3 px-6 text-left">$1,150 / $1,180</td>
                <td class="py-3 px-6 text-left">-$50</td>
                <td class="py-3 px-6 text-left">$10</td>
              </tr>

              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr>

              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr>


              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr>


              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr>


              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr>


              <tr class="border-b text-white text-lg bg-slate-800 hover:bg-gray-700">
                <td class="py-3 px-6 text-left">2</td>
                <td class="py-3 px-6 text-left">$900</td>
                <td class="py-3 px-6 text-left">$850 / $880</td>
                <td class="py-3 px-6 text-left">-$30</td>
                <td class="py-3 px-6 text-left">$5</td>
              </tr> */}

              {ticker.map((item, index) => (
                <tr
                  key={index}
                  className=" border-b text-white text-lg bg-slate-800 hover:bg-gray-700 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-95"
                >
                  <td className="py-3 px-6 text-center  rounded-l-xl ">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-center font-semibold">{item.name}</td>
                  <td className="py-3 px-6 text-center font-semibold">
                    {item.buy}/{item.sell}
                  </td>
                  <td className="py-3 px-6 text-center font-semibold">{item.last}</td>
                  <td className="py-3 px-6 text-center rounded-r-xl font-semibold">
                    {item.base_unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
