import './App.css'

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Programs from "./pages/Programs.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from './pages/BlogDetail.jsx';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
