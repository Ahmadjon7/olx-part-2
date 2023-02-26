import React from 'react';
import Auth from './auth/Auth';
import Like from './like/Like';
import Home from './home/Home';
import Product from "./product/Product";
import Category from './category/Category';
import Search from './search/Search';
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/like">
            <Like/>
          </Route>
          <Route path="/category/:id">
            <Category/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
          <Route path="/search/:productName">
            <Search/>
          </Route>
      </Switch>
    );
};

export default Routes;