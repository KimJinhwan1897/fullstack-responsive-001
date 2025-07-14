'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CompanyStats.module.css';

interface StatProps {
  number: number;
  title: string;
  symbol?: string;
}

function StatCounter({ number, title, symbol = '' }: StatProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000; // ms
          const step = number / (duration / 16);
          
          const countUp = () => {
            start += step;
            if (start < number) {
              setCount(Math.floor(start));
              requestAnimationFrame(countUp);
            } else {
              setCount(number);
            }
          };
          
          requestAnimationFrame(countUp);
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [number]);

  return (
    <div className={styles.statItem} ref={countRef}>
      <div className={styles.statNumber}>
        {count}
        <span className={styles.statSymbol}>{symbol}</span>
      </div>
      <div className={styles.statTitle}>{title}</div>
    </div>
  );
}

export default function CompanyStats() {
  const stats = [
    { number: 15, title: '업력', symbol: '년' },
    { number: 98, title: '고객 만족도', symbol: '%' },
    { number: 250, title: '임직원 수', symbol: '+' },
    { number: 1200, title: '성공적인 프로젝트', symbol: '+' }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsWrapper}>
          {stats.map((stat, index) => (
            <StatCounter 
              key={index} 
              number={stat.number} 
              title={stat.title} 
              symbol={stat.symbol} 
            />
          ))}
        </div>
      </div>
    </section>
  );
} 