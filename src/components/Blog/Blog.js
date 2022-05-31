import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="inner-hero">
                <h2>Blog</h2>
            </div>
            <div className="container">
                <div className="faq">
                    <h2>What is context API?</h2>
                    <p>The Context API can be used to share data with multiple components, without having to pass data through props manually. মূলত রিএক্ট এ ডাটা উপর থেকে নিচে দিকে আসে বা প্রদান করে। ( parent to child ). Contex API আমাদের যে সুবিধাটা দেই সেটা হলঃ কোনো ডাটা কে ম্যানুয়ালি সবার মাধ্যমে না শেয়ার করে ডিরেক্ট কোন একটা কম্পনেন্টস এর কাছে শেয়ার করতে পারি। আমরা বিভিন্ন কাজে context API ব্যবহার করি যেমনঃ the current authenticated user, theme, or preferred language.</p>
                </div>
                <div className="faq">
                    <h2>What is semantic Tag?</h2>
                    <p>A semantic element clearly describes its meaning to both the browser and the developer. প্রথমে একটি no-semantic tag এর উধাহরন দেখা যাকঃ <b>div</b> and <b>span</b> এখানে সমস্যা হল এটি মূলত ব্রাউজার কে ক্লিয়ারলি বোঝাচ্ছেনা সে কি content প্রদান করবে। কিন্তু অন্যদিকে আমরা যদি semantic tag এর একটি উদাহরণ দেখিঃ <b>header</b> ,<b>section</b> and <b>article</b> এই ট্যাগ গুলা  ব্রাউজার ও ডেভলপার কে ক্লিয়ার ভাবে বোঝাচ্ছে সে কি content প্রদান করতে যাচ্ছে। আমরা যখন HTML দিয়ে কোড করি তখন আমাদের উচিত Semantic Tag ব্যবহার করা এতে কোড গুলা অনেক মিনিংফুল হয়।</p>
                </div>


            </div>
        </div>
    );
};

export default Blog;