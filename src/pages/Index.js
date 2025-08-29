import React from 'react';
import Main from '../layouts/Main';
import MainContent from '../components/MainContent';

const Index = () => (
  <Main
    description="Leyao (Lia) Tan's personal website"
    fullPage
  >
    <div
      className="index-content"
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <MainContent />
      </div>
    </div>
  </Main>
);

export default Index;
