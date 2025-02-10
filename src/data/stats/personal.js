import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-11-11T06:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'weightlifting',
    label: 'Weightlifting PRs',
    value: '135 lbs (61kg, Squat)',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'Google Map',
    link: 'https://www.google.com/maps/d/u/2/edit?mid=1_pJBjjt9stcD93wnYT_xBNW8GaLkJ44&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Vancouver, BC, Canada',
  },
];

export default data;
