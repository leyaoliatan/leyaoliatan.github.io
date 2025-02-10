import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>Some stats</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
