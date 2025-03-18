import React from 'react'

type Props = {}

export default function HeroSection({}: Props) {
  return (
<section className= "dark:text-gray-800 flex items-center justify-center">
	<div className="w-1/2 mx-auto flex flex-col px-4 py-6 lg:px-4 xl:max-w-3xl transform translate-y-20">
		<h1 className="text-4xl mx-auto font-bold sm:text-4xl text-lg">VoteCaste.<span className='dark:text-violet-600'>Online Voting System.</span>
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">To Choose Your Own Voice. To choose Our Own Leader. We Are A Democracy, We Choose For Us!&nbsp;&nbsp;
		<span className='font-bold'>This is an easier and secure path to cast your vote online.</span>
		</p>
		<div className="relative h-screen">
  <button className="flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-violet-500 text-white rounded-full active:translate-y-1 active:shadow-sm transition">
  Register as a Voter
  </button>
  <button className="flex top-[5%] absolute left-1/2 transform -translate-x-1/2 px-4 py-2 bg-violet-500 text-white rounded-full active:translate-y-1 active:shadow-sm transition">
   Register as a Candidate
  </button>
</div>
</div>
<div className="w-1/2 flex justify-center">
    <img src="logo.png" alt="Hero Image" className="w-3/4 rounded-lg"></img>
  </div>
</section>
  );
}