'use client';

import { useState } from 'react';
import styles from './CoreValues.module.css';

export default function CoreValues() {
  const coreValues = [
    {
      title: '혁신',
      description: '끊임없는 도전과 창의적인 사고로 미래를 앞서 나갑니다.'
    },
    {
      title: '신뢰',
      description: '정직과 투명성을 바탕으로 고객과의 신뢰를 최우선으로 생각합니다.'
    },
    {
      title: '전문성',
      description: '최고의 기술력과 전문 지식으로 최상의 서비스를 제공합니다.'
    },
    {
      title: '협력',
      description: '함께 성장하는 파트너십으로 더 큰 가치를 창출합니다.'
    }
  ];

  return (
    <section className={styles.coreValuesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>핵심 가치</h2>
        <p className={styles.sectionSubtitle}>우리가 추구하는 가치</p>
        
        <div className={styles.valuesGrid}>
          {coreValues.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{index + 1}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 