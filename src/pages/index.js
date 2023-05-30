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
            <span>BETA</span>
            <span>v0.2.8</span>
          </div>
          <h1>Welcome to the Tetheros Library</h1>
          <p>Browse our documentation, API, blog, and product development references.</p>
          <div className="docs-page-main-cta">
            <Link className="button button--secondary button--lg" to="/docs/quickstart">Quick start guide <HiOutlineArrowNarrowRight/></Link>
          </div>
          <div className="release-notes">
            <Link to="/docs/Release Notes/latest">Read the latest release notes here</Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}