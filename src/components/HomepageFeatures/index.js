import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'Get Started',
      description: (
        <div>
          <div>Learn how Tetheros can help you achieve your mission with clarity.</div>
          <ul className="feature-link-list">
            <Link to="/docs/overview">Product Overview</Link>
            <Link to="/docs/quickstart">Quick Start Guide</Link>
          </ul>
        </div>
      ),
    },
    {
      title: 'Release Notes',
      description: (
        <div>
          <div>Read about the latest updates to the Tetheros platform.</div>
          <ul className="feature-link-list">
            <Link to="/docs/Release Notes/latest">v0.1.21 (Latest)</Link>
            <Link to="/docs/Release Notes/v0.1.20">v0.1.20</Link>
            <Link to="/docs/Release Notes/v0.1.19">v0.1.19</Link>
            <Link to="/docs/Release Notes/all">Older Releases</Link>
          </ul>
        </div>
      )
    }
  ];
  return (
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
  );
}

function Feature({title, description, destination}) {
  return (
    <div className="feature-container">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


