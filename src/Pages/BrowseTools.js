import React, { useEffect, useState } from 'react';
import SingleTool from './Home/SingleTool';
import '../styles/browseTools.css';

const BrowseTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-basin-14338.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div>
            <h1 className='mt-5 mb-3'>All Tools</h1>
            <div className='all-tools'>
                {
                    tools.map(tool => <SingleTool key={tool._id} tool={tool}></SingleTool>)

                }
            </div>
        </div>
    );
};

export default BrowseTools;