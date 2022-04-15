import React from 'react';
import Child2 from './Child2';

const Child1 = () => (
  <div id="child1">
    <input type="checkbox" name="child1" />
    {' - '}
    <h3 style={{ display: 'inline' }}>Child Level 1</h3>
    <ul>
      <li>
        <Child2 />
      </li>
    </ul>
  </div>
);

export default Child1;
