import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Index from '../components/products/Index'
import NotFound from '../components/products/NotFound'
// import Inventory from '../components/products/Inventory'
import New from '../components/products/New'
import TestInventory from '../components/products/TestInventory'
import TestAdd from '../components/products/TestAdd'

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Index/> } />
            <Route path='/*' element={ <NotFound/> } />
            {/* <Route path='/inventory' element={ <Inventory/> } /> */}
            <Route path='/inventory' element={ <TestInventory/> } />
            <Route path='/inventory/new' element={ <New/> } />
            <Route path='/inventory/add' element={ <TestAdd/> } />
        </Routes>
    </div>
  )
}
