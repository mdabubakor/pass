import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-purple-200 px-4 flex items-center justify-between h-14'>
     <div className='logo font-bold text-2xl text-slate-500 '>
        <span className='text-green-700'>&lt;</span>
        A
        <span className='text-green-700'>BS/&gt;</span>
     </div>
        <ul>
            <li className='flex gap-4 '>
                <a href="/" className='hover:font-bold'>Home</a>
                <a href="/" className='hover:font-bold'>About</a>
                <a href="/" className='hover:font-bold'>Contact</a>
            </li>
        </ul>
     
    </nav>
  )
}

export default Nav
