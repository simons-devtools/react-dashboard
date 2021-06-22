import React from 'react';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = (props) => {

    return (
        <Menu iconShape="circle">
            <SubMenu suffix={<span className="badge yellow">3</span>} title='orders review' icon={<FaRegLaughWink />}>
                <MenuItem>
                    processing
                    <Link to="/dashboard/orders-review/processing" />
                </MenuItem>
                <SubMenu title='checkout'>
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
            <SubMenu prefix={<span className="badge gray">3</span>} title='cart products' icon={<FaHeart />}>
                <MenuItem>
                    cart test
                    <Link to="/dashboard/cart-products/test" />
                </MenuItem>
                <MenuItem>submenu 2</MenuItem>
                <MenuItem>submenu 3</MenuItem>
            </SubMenu>

            {/* For the products overview/categories menus */}
            <SubMenu title='products overview' icon={<FaList />}>
                <SubMenu title='electronic devices'>
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
                <SubMenu title='electronic accessories'>
                    <MenuItem>audio devices</MenuItem>
                    <MenuItem>video devices</MenuItem>
                    <MenuItem>computer accessories</MenuItem>
                    <MenuItem>camera accessories</MenuItem>
                    <MenuItem>storge devices</MenuItem>
                    <MenuItem>printer devices</MenuItem>
                </SubMenu>
                {/* ... 03 ... */}
                <SubMenu title="men's fashion">
                    <MenuItem>shart & t-shart</MenuItem>
                    <MenuItem>men's shoes</MenuItem>
                    <MenuItem>men's pants</MenuItem>
                    <MenuItem>men's accessories</MenuItem>
                </SubMenu>
                {/* ... 04 ... */}
                <SubMenu title='tv & home appliances'>
                    <MenuItem>television</MenuItem>
                    <MenuItem>cool & heat</MenuItem>
                    <MenuItem>large appliances</MenuItem>
                    <MenuItem>small appliances</MenuItem>
                </SubMenu>
                {/* ... 05 ... */}
                <SubMenu title="women's fashion">
                    <MenuItem>saree & shalwar</MenuItem>
                    <MenuItem>womens bags</MenuItem>
                    <MenuItem>women's shoes</MenuItem>
                    <MenuItem>women's accessories</MenuItem>
                    <MenuItem>women's kurti</MenuItem>
                    <MenuItem>women's tops</MenuItem>
                </SubMenu>
                {/* ... 06 ... */}
                <SubMenu title="helth & beauty">
                    <MenuItem>food supplements</MenuItem>
                    <MenuItem>skin care</MenuItem>
                    <MenuItem>face makeup</MenuItem>
                    <MenuItem>hair care</MenuItem>
                    <MenuItem>beauty tools</MenuItem>
                    <MenuItem>medical supplies</MenuItem>
                </SubMenu>
                {/* ... 07 ... */}
                <SubMenu title="sports & outdoors">
                    <MenuItem>bye cycles</MenuItem>
                    <MenuItem>motor cycles</MenuItem>
                    <MenuItem>exercise & fitness</MenuItem>
                    <MenuItem>men's & women's</MenuItem>
                </SubMenu>
            </SubMenu>
        </Menu>
    );
};

export default Dropdown;