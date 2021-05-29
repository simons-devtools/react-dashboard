import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';

function Layout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <div className="sidebar-content">
        <Aside
          history={props.history}
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
      </div>
      
      <div className="body-content">
        <Main
          handleToggleSidebar={handleToggleSidebar}
        />
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
