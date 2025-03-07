import React from 'react'
import { CiSearch } from "react-icons/ci";

type Props = {
  className?: string;
  value : string;
  onChange : React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit : React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function (props: Props) {
  return (
  
      <form className='flex relative items-center justify-center h-10'
      onSubmit={props.onSubmit} >
      <input type="text" value = {props.value} onChange = {props.onChange} placeholder='Search Location....' className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full items-center' 
      />
      <button className='px-4 py-2 bg-blue-500 focus:outline-none rounded-r-md hover:bg-blue-600 whitespace-nowrap h-full'>
      <CiSearch />
      </button>
    </form>
    
  )
}