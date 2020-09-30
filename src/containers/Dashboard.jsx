import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Main from '../components/Main/Main'
import Sidebar from '../components/Sidebar/Sidebar'
const Dashboard = () => {
    return (
        <Router>
            <Sidebar/>
            <Main/>
        </Router>
    )
}

export default Dashboard
