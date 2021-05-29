import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Products.css';

const Main = (props) => {
  return (
    <main>
      <div className="btn-toggle" onClick={() => props.handleToggleSidebar(true)}><FaBars /></div>
      <header>
        <h1>There has been components title</h1>
        {/* <p style={{ width: '200px' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dolore, eveniet maiores assumenda similique ab perspiciatis optio illum qui. Vel maxime et minima veritatis molestias dignissimos, doloribus a quo eveniet praesentium maiores odio, ea ex velit est possimus cupiditate soluta reprehenderit sunt sequi libero. Qui molestias, placeat odio vitae ea officia veniam accusantium in animi suscipit. Aliquam libero doloremque ratione fuga accusamus aut modi quasi voluptatum aliquid, commodi mollitia, atque, magni voluptates repudiandae ut cumque perspiciatis voluptatem? Sapiente ex laudantium, ea hic nesciunt commodi, nam maxime optio soluta ipsa quasi reprehenderit dolor! Neque veritatis quos animi hic soluta id optio?</p> */}
      </header>
    </main>
  );
};

export default Main;
