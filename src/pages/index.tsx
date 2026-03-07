import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useColorMode } from "@docusaurus/theme-common"

import styles from './index.module.css';
import { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

const App = () => {
  const [imageVisible, setImageVisible] = useState(true);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 图片消失后显示标题
    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 1);

    // 标题显示后开始显示副标题
    const subtitleTimer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 2);

    fetchData()

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://modsapi.pages.dev/img/bg_light.png');
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main style={
        {
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }
      }>
      <img src='../../img/modsapi.ico' alt="" style={
        {
          width: "20vw",
          height: "auto",
          position: 'fixed',
          transform: 'translateY(-10vh)'
        }
      }></img>
      </main>
    )
  }

  return (
    <main style={
        {
          backgroundImage: `url(../../img/bg_${colorMode}.png)`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          opacity: 0.85,
          width: "100vw",
          height: "auto",
        }
      }>
    <Container>
      <Content>
        {/* 标题 */}
        {titleVisible && (
          <TitleContainer>
            <MainTitle>ModSAPI</MainTitle>
            {subtitleVisible && (
              <Subtitle
                text="一款允许您在网易版《我的世界》通过类似SAPI范式开发模组的库"
                speed={50}
              />
            )}

          </TitleContainer>
        )}

        <Button>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              快速开始
            </Link>
          </div>
        </Button>
      </Content>
    </Container>
    <HomepageFeatures></HomepageFeatures>
    </main>
  );
};

// 逐个显示文字组件
const Subtitle = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return <SubtitleText>{displayText}</SubtitleText>;
};

// 动画定义
const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.8); }
`;

const breathe = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.8); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 样式组件
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-130px);
`;

const Logo = styled.img`
  width: 0vw;
  height: 3vw;
  transform: translateY(80px);
`;

const Button = styled.div`
  transform: translateY(60px);
`;

const TitleContainer = styled.div`
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out forwards;
`;

const MainTitle = styled.h1`
  font-size: 9vw;
  letter-spacing: 3px;
  margin-bottom: 30px;
  font-weight: 800;
  background: linear-gradient(to right, #4facfe, #82e2e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubtitleText = styled.p`
  font-size: 1.8rem;
  max-width: 1000px;
  line-height: 1.6;
  letter-spacing: 1px;
  opacity: 0.9;
  padding: 0 20px;
`;

function ModSAPIMain() {
  const {colorMode} = useColorMode();
  return (
    <main style={
        {
          background: `url(../../img/bg.png)`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          objectFit: "contain",
          width: "100vw",
          height: "auto",
        }
      }>

    </main>
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}文档`}
      description="ModSAPI">
      <App />
    </Layout>
  );
}
