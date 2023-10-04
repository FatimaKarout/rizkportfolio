// src/App.js
import React, { useState } from 'react';
import Footer1 from './component/Footer1';
import Header1 from './component/Header1';
import Whyus from './component/whyus';
import ContactUs from './component/contactus';
import Blog from './component/blog';
import Content from './dashboardcomp/Content';
import Projects from './component/project';
function App() {
  return (
    <>
      <div className="App">
        <Header1 />
        <Whyus />
        <Blog />
        <ContactUs />
        <Projects />
        <Footer1 />
      </div>
    </>
  );
}
export default App;
