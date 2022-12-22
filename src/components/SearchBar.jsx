
export default function SearchBar(props) {
  

    return (
      <div className="mt-5 ">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700" >
          Search Stock Symbols:
        </label>
        <div className="relative mt-1 flex items-center">
          <input
            type="text"
            onChange={(event) => {
              const copy = props.stocks.filter(stock => stock.s.toLowerCase().includes(event.target.value.toLowerCase()))
              props.setFilteredStocks(copy)
            }}
            name="search"
            id="search"
            placeholder="Stock ticker ex: AAPL,TSLA.."
            className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    )
  }
  