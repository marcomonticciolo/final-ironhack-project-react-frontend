import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Get Ahead',
    description:
      'Identify and fix mistakes before they cost you real money and Increase your confidence in your trading decisions!',
    icon: GlobeAltIcon,
  },
  {
    name: 'No Time Wasted',
    description:
      'Understand the psychology of trading & use our platform as a learning tool for educational purposes',
    icon: ScaleIcon,
  },
  {
    name: 'Buy Equities in an instant',
    description:
      'Create an account today and start buying US equities at click of a button',
    icon: BoltIcon,
  },
  {
    name: 'Mobile Responsive',
    description:
      'Take your trading anywhere on the go! with full accessibility and responsiveness on mobile screens',
    icon: DevicePhoneMobileIcon,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Practice Trading with the Ease of a Button</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
No need to risk a single dollar. Test your strategies with simulated virtual currency.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex transition md:block hover:scale-110 py-2 md:pl-2 lg:pl-2 h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



