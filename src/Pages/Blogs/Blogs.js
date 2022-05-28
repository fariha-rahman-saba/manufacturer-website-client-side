import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs mx-auto mt-5 mb-5'>
            <h3 className='text-2xl mb-5'>Q1: How will you improve the performance of a React Application?</h3>
            <p className='mb-5'>Ans: I can improve the performance of a React Application by keeping component state local where necessary, memoizing React components to prevent unnecessary re-renders, code-splitting in React using dynamic import(), windowing or list virtualization in React and lazy loading images in React.</p>
            <br />

            <h3 className='text-2xl mb-5'>Q2: What are the different ways to manage a state in a React application?</h3>
            <p className='mb-5'>Ans: There are four main types of state that is needed to properly manage in React apps: Local state, Global state, Server state, URL state. useState is the first tool I can user to manage state in my components. It can take accept any valid data value, including primitive and object values. useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.
                <br />
            </p>
            <h3 className='text-2xl mb-5'>Q3: How does prototypical inheritance work?</h3>
            <p className='mb-5'>Ans: Every object with its methods and properties contains an internal and hidden property known as Prototype.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use “Object. getPrototypeOf” and “Object.setPrototypeOf”. In modern language, it is being set using __proto__.</p>
            <br />
            <h3 className='text-2xl mb-5'>Q4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p className='mb-5'>{`Ans: const result = products.filter(product => product.name.includes(key)); `}</p>
            <br />
            <h3 className='text-2xl mb-5'>Q5: What is a unit test? Why should write unit tests?</h3>
            <p>Unit testing ensures that all code meets quality standards before its deployed. This ensures a reliable engineering environment where quality is principal. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more competently.</p>

            <h3 className='text-2xl mt-5 mb-5'>Q6: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p className='mb-5'>Ans: We do not set products = [...] because it is not dynamic. If we do this we have to write and call the array every time if there is change in the array or not. But if we use the setProducts that will update the state only if there is a change in the dependency</p>
        </div>
    );
};

export default Blogs;