import App from './App.js'
import Profile from './Profile.js'
import Friends from './Friends.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> } /> 
            <Route path="/profile" element={ <Profile /> } /> 
            <Route path="/friends" element={ <Friends /> } /> 
        </Routes> 
        </BrowserRouter>   
    )
}

export default Router;