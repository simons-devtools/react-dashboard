import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProduct";
import UserControl from "./Pages/UserControl";
import AdminStatus from "./Pages/AdminStatus";
import NotFound from "./Pages/NotFound";

// For the orders revoew:
import Processing from "./Orders/Processing";
import HandCash from "./Orders/Checkout/HandCash";
import BankCash from "./Orders/Checkout/BankCash";
import Delivery from "./Orders/Delivery";

// For the cart products:
import Test from "./Cart/Test";

// For the products:
import SmartPhone from "./Products/Collection-1/SmartPhone";
import TabletPhone from "./Products/Collection-1/TabletPhone";
import Laptop from "./Products/Collection-1/Laptop";
import Desktop from "./Products/Collection-1/Desktop";
import FeaturePhone from "./Products/Collection-1/FeaturePhone";
import SecurityCamera from "./Products/Collection-1/SecurityCamera";

const App = () => {

  return (
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/add-products" component={AddProduct} />
            <Route path="/dashboard/users-control" component={UserControl} />
            <Route path="/dashboard/admin-status" component={AdminStatus} />

            {/* For orders review route */}
            <Route path="/dashboard/orders-review/processing" component={Processing} />
            <Route path="/dashboard/orders-review/checkout/hand-cash" component={HandCash} />
            <Route path="/dashboard/orders-review/checkout/bank-cash" component={BankCash} />
            <Route path="/dashboard/orders-review/delivery" component={Delivery} />

            {/* For cart products route */}
            <Route path="/dashboard/cart-products/test" component={Test} />

            {/* For cart products route */}
            <Route path="/dashboard/products-overview/collection-1/smart-phone" component={SmartPhone} />
            <Route path="/dashboard/products-overview/collection-1/tablet-phone" component={TabletPhone} />
            <Route path="/dashboard/products-overview/collection-1/laptop" component={Laptop} />
            <Route path="/dashboard/products-overview/collection-1/desktop" component={Desktop} />
            <Route path="/dashboard/products-overview/collection-1/feature-phone" component={FeaturePhone} />
            <Route path="/dashboard/products-overview/collection-1/security-camera" component={SecurityCamera} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      )} />
    </BrowserRouter>
  );
}

export default App;
