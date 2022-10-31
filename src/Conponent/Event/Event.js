import React from 'react';
import { Outlet } from 'react-router-dom';

function Event() {
  return (
    <div>
      <h4>Today event</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
