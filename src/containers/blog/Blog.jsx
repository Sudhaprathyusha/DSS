import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = ()  => {
    return (
        <div className="dss__blog section__padding" id="blog">
            <div className="dss__blog-heading">
                <h1 className ="gradient__text">Alot is happening with our School We are blogging about it</h1>
            </div>
            <div className="dss__blog-container">
                <div className="dss__blog-container_groupA">
                   <Article imgUrl={blog01} date="dec28 ,2021" title =" AI is the future" />
                </div>
                <div className="dss__blog-container_groupB">
                    <Article  imgUrl={blog02} date="dec28 ,2021" title ="AI is the future"/>
                    <Article imgUrl={blog03} date="dec28 ,2021"  title ="Machine Learning Projects" />
                    <Article imgUrl={blog04} date="dec28 ,2021"  title ="AI Intervention in machine learning " />
                    <Article imgUrl={blog05} date="dec28 ,2021"  title ="Data mining" />
                </div>

            </div>

        </div>
    )
}

export default Blog