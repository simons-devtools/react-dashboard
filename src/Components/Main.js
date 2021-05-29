import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Products.css';

const Main = (props) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => props.handleToggleSidebar(true)}><FaBars /></div>
      <header>
        {/* <h1>There has been components title</h1> */}
      </header>
    </main>
  );
};

export default Main;
