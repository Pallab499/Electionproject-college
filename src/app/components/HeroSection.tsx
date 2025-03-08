import React from 'react'

type Props = {}

export default function HeroSection({}: Props) {
  return (
    
<section className="dark:bg-gray-100 dark:text-gray-800 flex flex-col items-center justify-center h-screen">
	<div className="container mx-auto flex flex-col items-center justify-center px-4 py-6 text-center md:py- 6 md:px-4 lg:px-4 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-4xl justify-center text-lg">Welcome To Our <span className='dark:text-violet-600'>Home</span> Page!
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">To Choose Your Own Voice. To choose Our Own Leader. We Are A Democracy, We Choose For Us!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gradient-to-r from-violet-500 to-blue-500 hover:from-blue-500 hover:to-violet-500 dark:text-gray-50">Login</button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-black-900 dark:border-gray-300">Register</button>
		</div>
	</div>
</section>

  )
}