import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    period: '1999-2000',
    location: 'Huangshuang Village',
    image: `${process.env.PUBLIC_URL}/images/timeline/huangshuang.jpg`,
  },
  {
    period: '2000-2013',
    location: 'Zixing County',
    image: `${process.env.PUBLIC_URL}/images/timeline/zixing.jpg`,
  },
  {
    period: '2013-2016',
    location: 'Chenzhou City',
    image: `${process.env.PUBLIC_URL}/images/timeline/chenzhou.jpg`,
  },
  {
    period: '2016-2020',
    location: 'Beijing',
    image: `${process.env.PUBLIC_URL}/images/timeline/beijing.jpg`,
  },
  {
    period: '2020-2022',
    location: 'Shanghai',
    image: `${process.env.PUBLIC_URL}/images/timeline/shanghai.jpg`,
  },
  {
    period: '2022-Now',
    location: 'Vancouver',
    image: `${process.env.PUBLIC_URL}/images/timeline/vancouver.jpg`,
  },
];

const Timeline = () => (
  <div className="timeline-container">
    <div className="timeline">
      {timelineData.map((item) => (
        <div key={`timeline-${item.period}`} className="timeline-item">
          <div className="timeline-image">
            <img src={item.image} alt={item.location} />
          </div>
          <div className="timeline-content">
            <h3>{item.period}</h3>
            <p>{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
