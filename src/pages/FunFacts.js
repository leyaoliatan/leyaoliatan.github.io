/* eslint-disable max-len */
import React from 'react';

import Main from '../layouts/Main';
import Timeline from '../components/Timeline/Timeline';

const { PUBLIC_URL } = process.env;

const facts = [
  {
    title: 'My name',
    body: (
      <>
        <p>My name is written as 乐 (Lè) 瑶 (Yáo) in Chinese. 乐 means “joy,” while 瑶 refers to precious jade. In Chinese culture, jade symbolizes good virtues. The sound of my name also echoes the Chinese phrase 快乐逍遥 (kuài lè xiāo yáo), meaning “to live with joy and a free spirit.”</p>
        <p className="pronunciation">Preferred pronunciation of my first name: Lia or Lè Yáo.</p>
      </>
    ),
    image: 'name-calligraphy.jpg',
    alt: 'A collage of the Chinese character 乐 in ancient calligraphy',
    caption: (
      <a href="https://cha.jiguzuo.com/cha/uddisy-19254/">
        Examples of the character “乐” in ancient Chinese calligraphy.
      </a>
    ),
  },
  {
    title: 'Outdoors',
    body: (
      <p>
        I love hiking! Vancouver has so many incredible hiking destinations,
        and my favorite is{' '}
        <a href="https://bcparks.ca/stawamus-chief-park/">The Chief in Squamish</a>.
      </p>
    ),
    image: 'outdoors.jpg',
    alt: 'View from the summit of The Chief in Squamish',
    caption: 'The view from the summit of The Chief.',
  },
  {
    title: 'Photography and Painting',
    body: <p>I enjoy photography and painting, and once worked as a wedding photographer&apos;s assistant.</p>,
    image: 'painting.jpg',
    alt: 'A digital painting of a corner of Shanghai by Leyao Tan',
    caption: 'A corner of Shanghai, digital painting.',
  },
  {
    title: 'Prose & Poetry',
    body: <p>I was especially drawn to literature, essays, and history in elementary and middle school, and almost decided to study Chinese literature or history. You might still be able to find some of the sentimental pieces I published in student magazines back then ;D</p>,
  },
  {
    title: 'Meet NongNong',
    body: <p>I love cats! One member of my family is a little orange cat named NongNong.</p>,
    image: 'nongnong.jpg',
    alt: 'NongNong, Leyao Tan’s orange cat',
    caption: 'Hello from NongNong!',
  },
];

const journeyNotes = [
  'I was born and raised in Hunan Province, in a small tourist town. The photograph is the morning mist over Dongjiang Lake in my hometown.',
  'From 2016 to 2020, I attended university in Beijing, a city steeped in history. My favorite place there is the Summer Palace. The photograph shows the sunset at the Summer Palace.',
  'In 2020, I moved to Shanghai to study at Shanghai Jiao Tong University. The university\'s Xuhui neighborhood is one of the places I recommend most in Shanghai, with towering plane trees and historic streets that retain the character of historic Shanghai. The photograph shows the Oriental Pearl Tower at night.',
  'In 2022, I moved to Vancouver and later began my Ph.D. journey. I love Vancouver, especially the mentors and friends I have met here. The scenery often feels surreal; even the long, rainy “Raincouver” winters have their own charm. I feel very fortunate to pursue my Ph.D. here. The photograph shows the UBC campus during cherry blossom season.',
];

const FunFacts = () => (
  <Main title="Fun Facts" description="Fun facts and the personal journey of Leyao Tan">
    <div className="site-page fun-facts-page">
      {facts.map((fact) => (
        <section className={`fact-section${fact.image ? '' : ' text-only'}`} key={fact.title}>
          <div className="fact-copy">
            <h1>{fact.title}</h1>
            {fact.body}
          </div>
          {fact.image && (
            <figure className="fact-media">
              <img src={`${PUBLIC_URL}/images/site/${fact.image}`} alt={fact.alt} />
              <figcaption>{fact.caption}</figcaption>
            </figure>
          )}
        </section>
      ))}

      <Timeline />
      <ul className="journey-notes">
        {journeyNotes.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </div>
  </Main>
);

export default FunFacts;
