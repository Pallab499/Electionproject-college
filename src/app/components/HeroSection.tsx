import React from 'react'

type Props = {}

export default function HeroSection({}: Props) {
  return (
    <div className="card" style={{width: "20rem"}}>
  <img src="download (1).jpg" className="card-img-top rounded-lg p-4 mx-auto" alt="..."/>
  <div className="card-body bg-blue-200 border border-blue-500 shadow-lg rounded-lg p-6 mx-2">
    <h5 className="card-title transition duration-300 hover:bg-purple-500 hover:text-white rounded-lg p-2">Surfing Area</h5>
    <p className="card-text shadow-md p-4 mt-4 rounded-lg p-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-md">Here are the List of Upcoming Special events and Elections to be held.</p>
    <ul className="list-group list-group-flush shadow-md p-4 mt-4 rounded-lg bg-blue-500 mx-auto">
    <li className="list-group-item font-serif p-4 space-y-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg">LIST OF UPCOMING EVENTS!</li>
    <li className="list-group-item p-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-md">1. General Elections</li>
    <li className="list-group-item p-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-md">2. College Fest</li>
    </ul>
  <div className="card-body">
  <button className="flex-col btn btn-primary rounded my-4 mx-6 py-2 px-2 text-white bg-gradient-to-r from-blue-500 to-pink-500 font-semibold hover:from-pink-500 hover:to-blue-500 transition duration-300">Register</button>
  <button className="flex-col btn btn-primary rounded bg-gradient-to-r from-pink-500 to-blue-500 text-white px-2 py-2 my-4 mx-6 rounded-lg font-semibold hover:from-blue-500 hover:to-pink-500 transition duration-300">Login</button>
  </div>
</div>
</div>
  )
}