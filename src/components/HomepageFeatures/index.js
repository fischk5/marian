import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';

export default function HomepageFeatures() {
  const FeatureList = [
    {
      title: 'Blog',
      description: (
        <>
          Hot takes on collaboration and leadership.
        </>
      ),
      destination: '/blog'
    },
    {
      title: 'Release Notes',
      description: (
        <>
          Read the latest updates to the Tetheros platform.
        </>
      ),
      destination: '/blog'
    },
  ];
  return (
    <section className={styles.features}>
      <div className="container" style={{marginLeft: "auto", marginRight: "auto"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
    </section>
  );
}

function Feature({title, description, destination}) {
  const history = useHistory();
  const goToPage = () => {
    if (!destination) return
    history.push(destination)
  }
  return (
    <div className={clsx('col col--4')} onClick={goToPage} style={{cursor: "pointer"}}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


