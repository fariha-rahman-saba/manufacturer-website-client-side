import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleTool from './SingleTool';
import './styles/tools.css';

const Tools = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);

    const displayTools = tools.slice(0, 6);

    const navigate = useNavigate();
    const goToBrowseTools = () => {
        navigate(`/browse-tools/`);
    };
    return (
        <div>
            <h1 className='mt-10 mb-10 text-3xl font-semibold'>Tools</h1>
            <div className='tools'>
                {
                    displayTools.map(tool => <SingleTool
                        key={tool.id}
                        tool={tool}
                    ></SingleTool>)
                }
            </div>
            <button className="btn btn-active mt-6 w-full max-w-xs mb-6" onClick={() => goToBrowseTools()}>Browse Tools</button>

        </div>
    );
};

export default Tools;