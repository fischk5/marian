import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
require('../../css/custom.css')
import { BsRocketTakeoff, BsMailbox, BsJournalBookmarkFill, BsCloudUpload } from 'react-icons/bs'

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'Get Started',
      icon: 'started',
      description: (
        <div>
          <div style={{color: "#666"}}>Learn how Tetheros can help you achieve your mission with clarity.</div>
          <ul className="feature-link-list">
            <Link to="/docs/overview">Platform Overview</Link>
            <Link to="/docs/quickstart">Quick Start Guide</Link>
            <Link to="/docs/roadmap">Product Roadmap</Link>
          </ul>
        </div>
      ),
    },
    {
      title: 'Recent Posts',
      icon: 'recent',
      description: (
        <div>
          <div style={{color: "#666"}}>Blog Posts</div>
          <ul className="feature-link-list">
            <Link to="/blog/how-to-deal-with-a-micromanaging-boss">How To Effectively Deal With A Micromanaging Boss</Link>
            <Link to="/blog/the-rebels-guide-to-office-politics">The Rebel's Guide to Office Politics</Link>
            <Link to="/blog/common-sources-of-organizational-misalignment-and-how-to-resolve-them">10 Common Sources of Organizational Misalignment and How To Resolve Them</Link>
            <Link to="/blog/how-each-generation-thinks-about-remote-work">How Each Generation Thinks About Remote Work (And Why That Matters)</Link>
            <Link to="/blog">All Posts</Link>
          </ul>
        </div>
      )
    },
    
  ];
  const FeatureListTwo = [
    {
      title: 'Feedback',
      icon: 'feedback',
      description: (
        <div>
          <div style={{color: "#666"}}>Engage directly with the development team</div>
          <ul className="feature-link-list">
            <Link to="/features/request">Request a feature</Link>
            <Link to="/bugs/report">Submit a bug</Link>
          </ul>
        </div>
      )
    },
    {
      title: 'Release Notes',
      icon: 'releases',
      description: (
        <div>
          <div style={{color: "#666"}}>Read about the latest updates to the Tetheros platform.</div>
          <ul className="feature-link-list">
            <Link to="/docs/Release Notes/latest">Latest Release (v0.2.8)</Link>
            <Link to="/docs/Release Notes/v0.2.7">Mar 29, 2023 (v0.2.7)</Link>
            <Link to="/docs/Release Notes/v0.2.6.1">Mar 21, 2023 (v0.2.6.1)</Link>
            <Link to="/docs/Release Notes/v0.2.6">Mar 15, 2023 (v0.2.6)</Link>
          </ul>
        </div>
      )
    }
  ];
  return (
    <>
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
    <section className={styles.features}>
          {FeatureListTwo.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
    </section>
    </>
  );
}

function Feature({title, description, icon}) {
  const getIcon = () => {
    if (icon === "started") return <BsRocketTakeoff/>
    if (icon === "feedback") return <BsMailbox/>
    if (icon === "recent") return <BsJournalBookmarkFill/>
    if (icon === "releases") return <BsCloudUpload/>
    return ""
  }
  return (
    <div className="feature-container">
      <div>
        <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px"}}>
          <div className="feature-icon-outer">{getIcon()}</div>
          <h3 style={{fontSize: "28px", fontWeight: 600}}>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}


