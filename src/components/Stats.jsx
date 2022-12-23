import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { useState } from 'react';


const stats = [
  { name: 'Balance', stat: '1,000,000$', previousStat: '1,000,000$', change: '0%', changeType: 'increase' },
  { name: 'Open P&L', stat: '58.16%', previousStat: '', change: '', changeType: 'increase' },
  { name: 'Top performer', stat: 'AAPL', previousStat: '', change: '', changeType: 'decrease' },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Stats(props) {

  const [portfolio, setPortfolio] = useState([]);



  const getPortfolioData = () => {

  axios.get(`${import.meta.env.VITE_BACKEND_URL}/portfolio`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then((axiosResponse) => {
    setPortfolio(axiosResponse);
    console.log(axiosResponse)
  })
  .catch((err) => console.log(err));

}


  return (
    <div className='mt-3 mb-8'>
      <h3 className="text-lg font-medium leading-6 text-gray-900">24 Hour Change %</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 bg-gray-800 py-5 sm:p-6">
            <dt className="text-lg font-normal text-white">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-white">
                {props.balance}
                <span className="ml-2 text-sm font-medium text-white">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}