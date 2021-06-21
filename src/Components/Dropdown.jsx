import React from 'react';
import { useIntl } from 'react-intl';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {
    const intl = useIntl();

    return (
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
    );
};

export default Dropdown;