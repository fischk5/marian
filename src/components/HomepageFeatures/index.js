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
            <Link to="/docs/getting-started">About</Link>
            <Link to="/docs/quickstart">Quick Start</Link>
            {/* <Link to="/docs/roadmap">Product Roadmap</Link> */}
            <Link to="/docs/Tetheros Pro/getting-started">Tetheros Pro</Link>
            <Link to="/docs/release-notes">Product Updates</Link>
          </ul>
        </div>
      ),
    },
    {
      title: 'Contact',
      icon: 'feedback',
      description: (
        <div>
          <div style={{color: "#666"}}>Engage directly with the development team</div>
          <ul className="feature-link-list">
            <Link to="/features/request">Request a feature</Link>
            <Link to="/bugs/report">Submit a bug</Link> 
            <Link to="/docs/Tetheros Pro/billing">Billing</Link>
          </ul>
        </div>
      )
    },
    
  ];
  return (
    <>
    <section className={styles.features}>
          {FeatureList.map((props, idx) => (
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


