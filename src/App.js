import React from 'react';
import './App.css';
import Random1 from './components/Random1';
import Tag1 from './components/Tag1';

const App = () => (
    <div>
        <h1>Random Gif Application</h1>
        <div className="main-container">
            <Random1/>
            <Tag1/>
        </div>
    </div>
)



export default App;