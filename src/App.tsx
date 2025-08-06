import {BrowserRouter as Router, Route, Routes} from 'react-router'
import './index.css'
import {Login} from "@/pages/login.tsx";
import {useEffect} from "react";
import {AuthProvider, useAuth} from "@/authentication/authProvider.tsx";

function App() {
    const {user} = useAuth()
    console.log(user)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App
