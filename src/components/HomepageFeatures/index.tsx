import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '低性能损失',
    Svg: require('@site/static/img/high_speed.svg').default,
    description: (
      <>
        与ModSDK有相近甚至更快的速度
      </>
    ),
  },
  {
    title: '接口简洁',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        ModSAPI将接口以SAPI的方式整理，接口更方便寻找与开发
      </>
    ),
  },
  {
    title: '平台统一',
    Svg: require('@site/static/img/cross.svg').default,
    description: (
      <>
        ModSAPI旨在减轻国际版与网易版双端开发的工作量，接口统一，方便跨平台
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <Svg className={styles.featureSvg} role="img" />
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
