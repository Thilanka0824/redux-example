import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='nav-bar'>Counter: {count}</div>
  )
}

export default NavBar