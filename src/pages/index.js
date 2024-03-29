import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
require('../css/custom.css')
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Tetheros Guide`} description="Getting started in Tetheros, a modern collaboration platform.">
      <header>
        <div className="docs-page-main-container">
        <div className="docs-page-main-product-versioning">
            <span>v0.4.3</span>
          </div>
          <h1>Welcome to the Tetheros Help Desk</h1>
          <p>Browse our documentation, API, blog, and product development references.</p>
          <div className="docs-page-main-cta">
            <Link className="button button--secondary button--lg" to="/docs/quickstart">Quick start guide <HiOutlineArrowNarrowRight/></Link>
          </div>
          <div className="release-notes">
            <Link to="/docs/release-notes">Read the latest release notes here</Link>
          </div>
        </div>
      </header>
      <HomepageFeatures />        
    </Layout>
  );
}