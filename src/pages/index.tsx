import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

const SUBTITLE = '一款允许您在网易版《我的世界》通过类似 SAPI 范式开发模组的库';

// 逐字显示的副标题（打字机效果）
function Typewriter({ text, speed }: { text: string; speed: number }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <p className={styles.subtitle}>{displayText}</p>;
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.mainTitle}>ModSAPI</h1>
        <Typewriter text={SUBTITLE} speed={50} />
        <div className={styles.buttons}>
          <Link className="btn normal_btn large_btn" to="/docs/intro">
            快速开始
          </Link>
          <Link className="btn green_btn large_btn" to="/docs/intro">
            项目文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} 文档`} description="ModSAPI">
      <main className={styles.oreuiMain}>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
