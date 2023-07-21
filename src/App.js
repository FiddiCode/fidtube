import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Header from './components/Header'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import SearchResult from './components/SearchResult'
import AppContext from '../src/context/contextApi'
function App() {
  return (
    <AppContext>
   <BrowserRouter>
     <div className='flex flex-col h-full'>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
      </Routes>
     </div>
   </BrowserRouter>
    </AppContext>
  );
}

export default App;
