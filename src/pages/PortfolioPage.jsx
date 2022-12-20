import Stats from "../components/Stats";
import { useState, useEffect } from "react";
import axios from "axios";
import DropdDownPortfolio from "../components/DropdownPortfolio";
import SearchBar from "../components/SearchBar";

export default function Portfolio() {

  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  const [visible, setVisible] = useState(10);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  const getStockQuotes = () => {
    axios
      .get(`http://localhost:3000/api/stocks/all`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((axiosResponse) => {
        setStocks(axiosResponse.data);
        setFilteredStocks(axiosResponse.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStockQuotes();
  }, []);

  return (
    <div className="px-4 mt-10 sm:px-6 lg:px-8">
      <Stats />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            List of All US Equity Holdings
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Stocks are fungible — that is, sellable — financial instruments
            representing ownership of a fraction of a company. If you own a unit
            of stock, termed a share, then you're a part owner of the
            corporation it's from. This entitles you to a portion of that
            company's profits when they're redistributed to investors as
            dividends. And — if the organization increases in value — the value
            of your shares will also rise accordingly (the same is also true if
            the company falls in value). So, without further ado, here's a list
            of US stocks you can invest in.
          </p>
          <SearchBar stocks={stocks} setFilteredStocks={setFilteredStocks} />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-black">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-white sm:pl-6"
                    >
                      Ticker
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Ask
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Bid
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Ask size
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                      Bid Size
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-white"
                    >
                    Sell
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredStocks?.slice(0, visible).map((allStocks) =>(
                    <tr className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-bold sm:pl-6">
                        {allStocks.s}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm ">
                        {allStocks.a} USD
                      </td>
                      <td className="whitespace-nowrap p-4  text-sm ">
                        {allStocks.b} USD
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm  sm:pr-6">
                        {allStocks.asz}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm  sm:pr-6">
                        {allStocks.bsz}
                      </td>
                      <td className="whitespace-wrap py-4 pl-4  text-sm  sm:pr-3">
                        <span className="flex justify-center ">
                        <DropdDownPortfolio />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=" flex flex-col 	">
    <button
      className=" content-between bg-transparent hover:bg-black 
      text-blue-800 font-semibold hover:text-white py-2  border
      border-black hover:border-transparent "
      onClick={showMoreItems} >
          Load More
     </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
