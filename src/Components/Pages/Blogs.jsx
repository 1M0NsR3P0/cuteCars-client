import React from 'react';

const Blogs = () => {
    return (
        <div className=' flex flex-col justify-center items-center text-center'>
            <div className='md:w-[1200px] w-full border border-blue-500 text-[22px]'>
                <p className='font-semibold'>1: What is an access TOKEN and what is a refresh TOKEN?</p>
                <p className='text-left p-5'>In JsonwebTOken , when you sign for an acess key you declare an expiry time also. and when that expiry time ends the access token got expired and request for new acccess token. and that's where you need a refresh token to provide an accesss token. Basically jwt is providing a security for our server so that not one without token can access to it. </p>
            </div>
            <div className='md:w-[1200px] w-full border border-blue-500 text-[22px]'>
                <p className='font-semibold'>2: Compare SQL and NoSQL databases?</p>
                <p className='text-left p-5'>SQL and NOSQL both are database management system that give us controls to our databases so that we can modify our data as needed. SQL or structured query language do use structured data model based table with a pre defined scema. it has rows and colums to structure the datas with databse system. on the other hand NoSQL databases use various data models, such as document-based, key-value, wide-column, or graph-based. They offer flexible schemas and allow storing unstructured or semi-structured data.
                    SQL databases are suitable for structured data, complex queries, and transactions.
                    NoSQL databases are suitable for handling large amounts of unstructured or rapidly changing data, real-time applications, and distributed systems
                    SQL databases typically provide ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and transactional consistency.
                    NoSQL databases may relax ACID guarantees to achieve higher scalability and performance. They often prioritize availability and partition tolerance (CAP theorem) over strict consistency.
                </p>
            </div>
            <div className='md:w-[1200px] w-full border border-blue-500 text-[22px]'>
                <p className='font-semibold'>3: What is express js? What is Nest JS?</p>
                <p className='text-left p-5'>first I want to say express is not a programming language.it is a nodejs framework that makes it easy to get the best use of javascript and even more feature is provided than nodejs.Express.js is known for its simplicity and extensive ecosystem, making it a widely adopted framework for building server-side applications in JavaScript or TypeScript. NestJS is a progressive, opinionated Node.js framework for building efficient and scalable server-side applications. It is built with TypeScript and leverages modern JavaScript features and design patterns. NestJS combines elements from various frameworks, such as Express.js, and provides a structured and modular approach to application development. It offers a powerful dependency injection system, integrated testing capabilities, and built-in support for building GraphQL and REST APIs. </p>
            </div>
            <div className='md:w-[1200px] w-full border border-blue-500 text-[22px]'>
                <p className='font-semibold'>3: What is express js? What is Nest JS?</p>
                <p className='text-left p-5'>In MongoDB, the Aggregation function is defined as the best method to work with a cluster of data and find out a common result. Performing aggregation means, collecting data from different documents, grouping all the data together and them applying operation like finding out the maximum vales, sorting them, sum of total values and many more..
                    exapmle: <br />
                    To understand the concept of aggregation, let's discuss it practically with the help of an example.
                    For example, You have three documents in a single collection. Every documents contains 3 fields, Name, Product and Price as shown below: 
                    <img className='fluid' src="https://i.ibb.co/7G0qG0C/Aggregation1.jpg" alt="codes" />
                    <br />
                    Now, If you know that how many different categories of product you have in a collection, you can apply aggregate function $group to group all different categories of product all together and display it on the screen as shown below:
                    <img src="https://i.ibb.co/3yV7xs3/Screenshot-2023-05-21-215957.png" alt="" />
                    OUTPUT:
                    <img src="https://i.ibb.co/s9CvkYQ/Screenshot-2023-05-21-220011.png" alt="" />
                    </p>
            </div>
        </div>
    );
};

export default Blogs;