import React from 'react';
import Switch from 'react-switch';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Aside = (props) => {
  const { collapsed, toggled, handleToggleSidebar, handleCollapsedChange } = props;

  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <p>Developer dashboard</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Single menu: top/1 */}
          <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">new</span>}>
              dashboard
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaGem />}>
              add products
              <Link to="/dashboard/add-products" />
            </MenuItem>
          </Menu>

          {/* Dropdown Menus: middle/02 */}
          <Dropdown />


          {/* Single menu: down/3 */}
          <Menu iconShape="circle">
          <MenuItem icon={<FaTachometerAlt />} suffix={<span className="badge red">new</span>}>
              user control
              <Link to="/dashboard/users-control" />
            </MenuItem>
            <MenuItem icon={<FaGem />}>
              admin status
              <Link to="/dashboard/admin-status" />
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 24px' }}>
            <div className="sidebar-btn">
              <Switch
                height={16}
                width={30}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleCollapsedChange}
                checked={collapsed}
                onColor="#219de9"
                offColor="#bbbbbb"
              />
            </div>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default Aside;
