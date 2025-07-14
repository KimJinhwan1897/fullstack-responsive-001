'use client';

import styles from './TeamMembers.module.css';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
}

export default function TeamMembers() {
  const teamMembers: TeamMember[] = [
    {
      name: '김대표',
      position: '대표이사',
      bio: '15년 이상의 산업 경험을 가진 IT 전문가로, 혁신적인 비전과 리더십으로 회사를 이끌고 있습니다.',
      imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
      name: '이부장',
      position: '기술 이사',
      bio: '최신 기술 트렌드를 선도하며 당사의 기술적 우수성을 책임지고 있습니다.',
      imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
      name: '박팀장',
      position: '마케팅 책임자',
      bio: '창의적인 마케팅 전략으로 브랜드 가치를 높이는데 중요한 역할을 하고 있습니다.',
      imageUrl: 'https://via.placeholder.com/300x300'
    },
    {
      name: '최과장',
      position: '제품 관리자',
      bio: '사용자 경험을 최우선으로 생각하며 제품의 품질과 혁신을 추구합니다.',
      imageUrl: 'https://via.placeholder.com/300x300'
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>리더십</h2>
        <p className={styles.sectionSubtitle}>우리의 비전을 실현하는 사람들</p>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.memberImageWrapper}>
                <div 
                  className={styles.memberImage}
                  style={member.imageUrl ? { backgroundImage: `url(${member.imageUrl})` } : {}}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberPosition}>{member.position}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 