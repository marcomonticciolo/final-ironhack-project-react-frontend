import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import axios from 'axios'


const solutions = [
  { name: 'Amount of shares'},
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdDownPortfolio(props) {
  
  const [shareNumber, setShareNumber] = useState(0) 
  
  const sellShares = (event) => {
    event.preventDefault()
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/portfolio/${props.stockId}`, {
      symbol: props.symbol,
      shares: shareNumber
    }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
      .then(axiosRes => {
        console.log(axiosRes.data)
        props.getStockQuotes()
      })
      .catch(err => console.log(err))
  }

  return (
    <Popover className="inline mr-5">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
            )}
          >
            <span className='bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-full'>Sell</span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="inline overflow-hidden z-10 mt-3  max-w-s  transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      className="-m-3 rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <div>
        <input
          type="number"
          value={shareNumber}
          onChange={(e) => setShareNumber(e.target.value)}
          name="number"
          id="number"
          min={0}
         
          className="block w-full rounded-md mt-3 border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          placeholder='Ex 100'
          />
      </div>
                    </a>
                  ))}
                  <button
                  onClick={sellShares}
                   className='bg-black text-white  hover:bg-gray-800 py-3 rounded-lg'>Sell Shares</button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
