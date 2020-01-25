import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { TOGGLE_LOCKED, TOGGLE_CLOSED } from '../redux/constants'
import Display from '../display/Display';
import Controls from '../controls/Controls';

const Dashboard = () => {
  const { locked, closed } = useSelector(state => state)

  const dispatch = useDispatch()
 
  const toggleLocked = () => {
    dispatch({ type: TOGGLE_LOCKED, payload: {} })
  };

  const toggleClosed = () => {
    dispatch({ type: TOGGLE_CLOSED, paload: {} })
  };

  return (
    <>
      <Display locked={locked} closed={closed} />
      <Controls
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
      />
    </>
  );
}

export default Dashboard;