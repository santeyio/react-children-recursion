import React, { useEffect } from 'react';
import Child1 from './Child1';

const Parent = ({ children }) => {
  console.log('children: ', children);
  const recurseChildren = (component) => {
    // ------------
    // recursively search tree of children and return
    // an array of components with a 'name' prop
    // ------------
    let results = [];
    // see if component has a props.name
    console.log('running recurseChildren on ', component);
    if (component && component.props && component.props.name) {
      results.push(component.props.name);
    }
    // check component
    if (Array.isArray(component)) {
      component.forEach((child) => {
        results = results.concat(recurseChildren(child));
      });
    } else if (typeof component === 'object' && component !== null) {
      results = results.concat(recurseChildren(component.props.children));
    }
    return results;
  };

  const r = recurseChildren(children);
  console.log('results: ', r);

  return (
    <div id="parent">
      <h1>This is the parent</h1>
      <ul>
        {children}
      </ul>
    </div>
  );
}

export default Parent;
