import React from 'react';

const timelineData = [
  {
    period: '1999–2016',
    location: 'Chenzhou',
    image: `${process.env.PUBLIC_URL}/images/site/chenzhou.jpg`,
    alt: 'Morning mist over Dongjiang Lake',
  },
  {
    period: '2016–2020',
    location: 'Beijing',
    image: `${process.env.PUBLIC_URL}/images/site/beijing.jpg`,
    alt: 'Sunset at the Summer Palace in Beijing',
  },
  {
    period: '2020–2022',
    location: 'Shanghai',
    image: `${process.env.PUBLIC_URL}/images/timeline/shanghai.jpg`,
    alt: 'City lights in Shanghai',
  },
  {
    period: '2022–Present',
    location: 'Vancouver',
    image: `${process.env.PUBLIC_URL}/images/site/vancouver.jpg`,
    alt: 'Cherry blossom season at UBC in Vancouver',
  },
];

const Timeline = () => (
  <div className="timeline" aria-label="Personal journey timeline">
    {timelineData.map((item) => (
      <div key={`timeline-${item.period}`} className="timeline-item">
        <div className="timeline-image">
          <img src={item.image} alt={item.alt} />
        </div>
        <p className="timeline-period">{item.period}</p>
        <p className="timeline-place">{item.location}</p>
      </div>
    ))}
  </div>
);

export default Timeline;
