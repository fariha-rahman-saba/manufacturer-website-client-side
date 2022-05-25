import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs mx-auto mt-5 mb-5'>
            <h3 className='text-2xl'>Q1: How will you improve the performance of a React Application?</h3>
            <p>Ans: I can improve the performance of a React Application by keeping component state local where necessary, memoizing React components to prevent unnecessary re-renders, code-splitting in React using dynamic import(), windowing or list virtualization in React and lazy loading images in React.</p>
            <br />

            <h3 className='text-2xl'>Q2: What are the different ways to manage a state in a React application?</h3>
            <p>Ans: There are four main types of state that is needed to properly manage in React apps: Local state, Global state, Server state, URL state. useState is the first tool I can user to manage state in my components. It can take accept any valid data value, including primitive and object values. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.
                <br />
            </p>
            <h3 className='text-2xl'>Q3: How does prototypical inheritance work?</h3>
            <p>Ans: Every object with its methods and properties contains an internal and hidden property known as Prototype.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use “Object. getPrototypeOf” and “Object.setPrototypeOf”. In modern language, it is being set using __proto__.</p>
            <br />
            <h3 className='text-2xl'>Q4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p>Ans: </p>
            <br />
            <h3 className='text-2xl'>Q5: What is a unit test? Why should write unit tests?</h3>
            <p>Ans: </p>
        </div>
    );
};

export default Blogs;