import React, { useEffect, useState } from 'react';
import SingleTool from './SingleTool';

const Tools = () => {

    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    console.log(tools);


    return (
        <div>
            <h1 id='tools' className='text-center mt-5'>Tools</h1>
            <div className='tools'>
                {
                    tools.map(tool => <SingleTool key={tool.id} tool={tool}></SingleTool>)
                }
            </div>

        </div>
    );
};

export default Tools;