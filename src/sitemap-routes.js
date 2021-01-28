import React from 'react';
import { Route } from 'react-router';
 
export default (
  <Route>
    <Route path='/about' />
    <Route path='/contact' />
    <Route path='/faqs' />
    <Route path='/privacy-policy' />
    <Route path='/terms-and-conditions' />
    <Route path='/article' />
    <Route path='/article/:id' />
    <Route path='/subscribe' />
  </Route>
);