import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../assets/bg1.jpg';
import { Link } from 'react-router-dom';
import SidebarItems from './SidebarItems';

const Aside = (props) => {
  const { defaultActive, collapsed, toggled, handleToggleSidebar, handleCollapsedChange } = props;
  const intl = useIntl();

  // For the route extention:
  const location = props.history.location;
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex)
    setActiveIndex(newIndex)
  }

  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
    return path;
  }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname))
    changeActiveIndex(activeItem);
  }, [location])

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
            {intl.formatMessage({ id: 'Developer dashboard' })}
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

          {/* For the orders review menus */}
          <Menu iconShape="circle">
            <SubMenu suffix={<span className="badge yellow">3</span>} title={intl.formatMessage({ id: 'orders review' })} icon={<FaRegLaughWink />}>
              <MenuItem>
                processing
              <Link to="/dashboard/orders-review/processing" />
              </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'checkout' })}`}>
                <MenuItem>
                  hand cash
                  <Link to="/dashboard/orders-review/checkout/hand-cash" />
                </MenuItem>
                <MenuItem>
                  bank cash
                  <Link to="/dashboard/orders-review/checkout/bank-cash" />
                </MenuItem>
              </SubMenu>
              <MenuItem>
                delivery
                <Link to="/dashboard/orders-review/delivery" />
              </MenuItem>
            </SubMenu>

            {/* For the cart products */}
            <SubMenu prefix={<span className="badge gray">3</span>} title={intl.formatMessage({ id: 'cart products' })} icon={<FaHeart />}>
              <MenuItem>
                cart test
              <Link to="/dashboard/cart-products/test" />
              </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
            </SubMenu>

            {/* For the products overview/categories menus */}
            <SubMenu title={intl.formatMessage({ id: 'products overview' })} icon={<FaList />}>
              <SubMenu title={`${intl.formatMessage({ id: 'electronic devices' })}`}>
                <MenuItem>
                  smart phone
                  <Link to="/dashboard/products-overview/collection-1/smart-phone" />
                </MenuItem>
                <MenuItem>
                  tablet phone
                  <Link to="/dashboard/products-overview/collection-1/tablet-phone" />
                </MenuItem>
                <MenuItem>
                  laptop
                  <Link to="/dashboard/products-overview/collection-1/laptop" />
                </MenuItem>
                <MenuItem>
                  desktop
                  <Link to="/dashboard/products-overview/collection-1/desktop" />
                </MenuItem>
                <MenuItem>
                  feature phone
                  <Link to="/dashboard/products-overview/collection-1/feature-phone" />
                </MenuItem>
                <MenuItem>
                  security camera
                  <Link to="/dashboard/products-overview/collection-1/security-camera" />
                </MenuItem>
              </SubMenu>

              {/* ... 02 ... */}
              <SubMenu title={`${intl.formatMessage({ id: 'electronic accessories' })}`}>
                <MenuItem>{intl.formatMessage({ id: 'audio devices' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'video devices' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'computer accessories' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'camera accessories' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'storge devices' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'printer devices' })}</MenuItem>
              </SubMenu>
              {/* ... 03 ... */}
              <SubMenu title={`${intl.formatMessage({ id: "men's fashion" })}`}>
                <MenuItem>{intl.formatMessage({ id: "shart & t-shart" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "men's shoes" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "men's pants" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "men's accessories" })}</MenuItem>
              </SubMenu>
              {/* ... 04 ... */}
              <SubMenu title={`${intl.formatMessage({ id: 'tv & home appliances' })}`}>
                <MenuItem>{intl.formatMessage({ id: 'television' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'cool & heat' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'large appliances' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'small appliances' })}</MenuItem>
              </SubMenu>
              {/* ... 05 ... */}
              <SubMenu title={`${intl.formatMessage({ id: "women's fashion" })}`}>
                <MenuItem>{intl.formatMessage({ id: "saree & shalwar" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "womens bags" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "women's shoes" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "women's accessories" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "women's kurti" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "'women's tops" })}</MenuItem>
              </SubMenu>
              {/* ... 06 ... */}
              <SubMenu title={`${intl.formatMessage({ id: "helth & beauty" })}`}>
                <MenuItem>{intl.formatMessage({ id: "food supplements" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "skin care" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "face makeup" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "hair care" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "beauty tools" })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "'medical supplies" })}</MenuItem>
              </SubMenu>
              {/* ... 07 ... */}
              <SubMenu title={`${intl.formatMessage({ id: "sports & outdoors" })}`}>
                <MenuItem>{intl.formatMessage({ id: 'bye cycles' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'motor cycles' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'exercise & fitness' })}</MenuItem>
                <MenuItem>{intl.formatMessage({ id: "men's & women's" })}</MenuItem>
              </SubMenu>
            </SubMenu>
          </Menu>

          {/* Single menu: down/2 */}
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
