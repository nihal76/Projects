import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from './App';

const Category = () => {
   const name = useContext(AppContext); 
 console.log('Name ', name)
  return (
    <div className='flex flex-col items-center gap-10 h-screen'>
         <h2 className="text-xl font-bold text-blue-800 sm:truncate sm:text-3xl sm:tracking-tight">
          Welcome {name}
        </h2>
       <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Select Your Category
        </h2>
         <section className='flex justify-center gap-3'>
           <figure>
              <Link to={'/gameplay'} state={'Technology'}>
              <img src = {'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg' } id='Technology' className='h-32 w-auto'/>
            </Link>
            <span>Technology</span>
           </figure>
            <figure>
            <Link to={'/gameplay'} state={'Science'}>
              <img src = {'https://as2.ftcdn.net/v2/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg'} id='Science' className='h-32 w-auto'/>
              </Link>
              <figcaption>Science</figcaption>
            </figure>
         <figure>
                <Link to={'/gameplay'} state={'GK'}>
                <img src = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_AxQ6kK_vv1j6wK5a4vX37UkEQlE01KftQ&s'} id='GK' className='h-32 w-auto' />
                </Link>
                <figcaption>GK</figcaption>
         </figure> 
         </section>
    </div>
  )
}

export default Category