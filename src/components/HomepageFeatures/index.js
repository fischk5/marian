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
    }
  ];
  const FeatureListTwo = [
    {
      title: 'Recent Posts',
      icon: 'recent',
      description: (
        <div>
          <div style={{color: "#666"}}>Blogs and announcements</div>
          <ul className="feature-link-list">
            <Link to="/blog/why-operational-autonomy-matters">Why Operational Autonomy Matters</Link>
            <Link to="/blog/5-ways-to-improve-your-volunteer-team-efficiency">Five Ways to Improve Your Volunteer Team's Efficiency</Link>
            <Link to="/blog/tetheros">The Future of Collaboration</Link>
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
            <Link to="/docs/Release Notes/latest">Latest (v0.2.7)</Link>
            <Link to="/docs/Release Notes/v0.2.6.1">Mar 21, 2023 (v0.2.6.1)</Link>
            <Link to="/docs/Release Notes/v0.2.6">Mar 15, 2023 (v0.2.6)</Link>
            <Link to="/docs/Release Notes/v0.2.5">Feb 23, 2023 (v0.2.5)</Link>
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


