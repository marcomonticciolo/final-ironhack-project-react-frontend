import { Fragment, useState, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon,CheckCircleIcon,XMarkIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Popup from './PopUP'
import { AuthContext } from "../context/context";

const solutions = [
  { name: 'Amount of shares'},

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdDown(props) {

  const [shareNumber, setShareNumber] = useState()

  const { user, isLoggedIn, logoutUser } = useContext(AuthContext);
 
  const navigate = useNavigate();

 




  let storedToken = localStorage.getItem('authToken')



  const addStock = () => {



    axios.post(`${import.meta.env.VITE_BACKEND_URL}/stocks`, 
    {
      symbol: props.symbol,
      shares: shareNumber
    },
     { headers: { Authorization: `Bearer ${storedToken}`} })
     .then((addedStock) => {
      navigate('/portfolio')
     })
  }    

  return (



    
    <Popover className="relative">
      
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              )}
              >
            <button className='bg-green-800 hover:bg-green-700 text-white px-5 py-2 rounded-full'>Buy</button>
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
            <Popover.Panel className="inline overflow-hidden z-10 mt-3  max-w-xs  transform px-2 sm:px-0">
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
          min={1}
          className="block w-full rounded-md mt-3 border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
          placeholder='Ex: 100'
          />
      </div>
                    </a>
                  ))}
                  <button
                  onClick={addStock} 

                  
                  
                  className='bg-black hover:bg-gray-800 text-white py-3 rounded-lg'>Buy Shares</button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
      </Popover>


      )
    }
    

    