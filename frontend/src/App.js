import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterBuilder from './Router/RouterBuilder';

function App() {
    return (
        <Router>
            <RouterBuilder />
        </Router>
    )
}
export default App;