import React, { useEffect, useState } from 'react';
import SingleTool from './SingleTool';
import './styles/tools.css';

const Tools = () => {

    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const displayTools = tools.slice(0, 6);


    return (
        <div>
            <h1 className='mt-5'>Tools</h1>
            <div className='tools'>
                {
                    displayTools.map(tool => <SingleTool key={tool.id} tool={tool}></SingleTool>)
                }
            </div>

        </div>
    );
};

export default Tools;