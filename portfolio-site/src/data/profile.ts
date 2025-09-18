import type {
  About,
  CallToAction,
  Contact,
  EducationItem,
  Experience,
  ExternalLink,
  Metric,
  SkillSet,
  TrainingItem,
} from '../types/content'

export const hero = {

  title: '💻Hello World!',
  summary:
    '사용자와 현장을 이해하는 웹 개발자입니다. 민원 시스템의 요구를 빠르게 파악해 실용적인 개선으로 연결합니다.',
  meta: {
    role: '주식회사 울림 | 개발3팀 (2023.04 - 현재)',
    duty: '웹 개발자 | 민원 시스템 구축 · 고도화 · 운영',
  },
}

export const highlights = [
  '공공 민원 시스템을 Nexacro · Spring · JSP 기반으로 구축하고 운영한 실무 경험',
  '민원인과 담당 부서와 직접 소통하며 요구사항을 분석하고 개선으로 연결한 커뮤니케이션 역량',
  '데이터 무결성과 배포 품질을 중시하며 안정적인 운영을 주도한 경험',
]

export const about: About = {
  title: '현장을 이해하는 개발자',
  description:
    '민원 시스템은 사용자와 담당자의 업무 맥락을 깊이 이해해야 제대로 개선할 수 있다는 사실을 실무에서 배웠습니다.요구사항을 정리하고, 프로세스를 시각화하며, 빠르게 검증 가능한 결과물을 전달하는 방식으로 협업합니다.',
  bullets: [
    '민원 담당자 및 민원인 인터뷰를 통해 요구사항을 정의하고 구현 우선순위를 결정',
    '운영 지표와 로그를 분석해 반복 SR을 줄이고 개선안을 제안',
    '배포 · 장애 대응 프로세스를 정비해 팀의 운영 부담을 경감',
  ],
}

export const metrics: Metric[] = [
  {
    value: '40+',
    label: 'SR / CS 이슈 해결',
    helpText: '요구사항 분석부터 기능 개선까지 직접 대응',
  },
  {
    value: '2년+',
    label: '공공 민원 도메인 경험',
    helpText: '재구축 · 고도화 · 유지보수 전 주기를 경험',
  },
  {
    value: '4개',
    label: '핵심 민원 모듈 구축',
    helpText: '국가출하승인, 제조 · 수입 · 자가백신 신고 등',
  },
]

export const externalLinks: ExternalLink[] = [
  {
    label: 'GitHub Repositories',
    href: 'https://github.com/oceanfromthewave?tab=repositories',
    description: '업무 참고 샘플과 학습 프로젝트를 정리하고 있습니다.',
  },
  {
    label: '기술 노트 (업데이트 예정)',
    href: 'https://github.com/oceanfromthewave',
    description: '기술 블로그나 회고 링크를 이 위치에 업데이트하세요.',
  },
]

export const experiences: Experience[] = [
  {
    id: 'training-maintenance-2025',
    period: '2025 - 진행 중',
    title: '교육이력관리시스템 유지보수',
    organization: '주식회사 울림 | 개발3팀',
    summary:
      'Spring과 JSP 기반 환경에서 신규 요구사항을 빠르게 반영하고 안정적인 운영을 책임지고 있습니다.',
    achievements: [
      '사용자 피드백을 반영한 JSP 화면 개선과 신규 기능 구현으로 민원 편의성 향상',
      'Spring 연계 비즈니스 로직과 데이터 검증 강화로 장애 가능성 최소화',
      '배포 관리 · 로그 모니터링 · 장애 대응 체계를 정비해 운영 연속성 확보',
      '클라이언트와 직접 소통하며 요구사항을 분석하고 신속하게 지원',
    ],
    tags: ['Spring', 'JSP', 'Java', 'Oracle', '운영 모니터링'],
    thumbnail: '/thumbnails/experience-2025.svg',
    thumbnailAlt: '교육이력관리시스템 운영을 상징하는 그래픽',
  },
  {
    id: 'vet-medicine-upgrade-2024',
    period: '2024',
    title: '동물용의약품 정보관리시스템 고도화',
    organization: '주식회사 울림 | 개발3팀',
    summary: '민원사무 변경과 정보 제공 기능을 고도화해 민원인의 경험을 향상시켰습니다.',
    achievements: [
      'Nexacro 기반 화면 개편(방문상담예약, 기술검토 Rollback 등)으로 복잡한 민원 흐름 단순화',
      '위해동물용의약품 정보 제공 모듈 구현으로 맞춤형 안내 강화',
      '민원 SR · CS를 직접 대응하여 40건 이상의 불편 사항 해결 및 응답 속도 단축',
      'WAS · DB 서버 관리와 배포 자동화 지원으로 안정적인 릴리스 체계 유지',
    ],
    tags: ['Nexacro', 'Oracle', '민원 시스템', 'CS 대응', '배포 자동화'],
    thumbnail: '/thumbnails/experience-2024.svg',
    thumbnailAlt: '동물용의약품 시스템 고도화를 상징하는 그래픽',
  },
  {
    id: 'vet-medicine-rebuild-2023',
    period: '2023',
    title: '동물용의약품 정보관리시스템 재구축',
    organization: '주식회사 울림 | 개발3팀',
    summary: '대민 민원 처리 화면을 신규 구축하며 데이터 신뢰성과 사용성을 높였습니다.',
    achievements: [
      '국가출하승인, 제조 · 수입 신고, 자가백신 신고 등 민원 화면 신규 개발과 기능 구현',
      '예약 관리 모듈을 설계 · 개발해 민원 절차를 간소화하고 사용자 편의성 향상',
      'Oracle DB 연동과 Validation 로직으로 데이터 무결성과 처리 정확성 강화',
    ],
    tags: ['Nexacro', 'Oracle', 'Validation', '예약 기능', '공공 서비스'],
    thumbnail: '/thumbnails/experience-2023.svg',
    thumbnailAlt: '재구축 프로젝트를 상징하는 그래픽',
  },
]

export const skillSets: SkillSet[] = [
  {
    label: '백엔드 & 프레임워크',
    items: ['Spring Framework', 'Spring Boot', 'Spring Data JPA', 'Java', 'JSP', 'MyBatis', 'eGovFrame'],
  },
  {
    label: '클라이언트 & UI',
    items: ['Nexacro', 'JavaScript', 'Bootstrap','React'],
  },
  {
    label: '데이터 & 인프라',
    items: ['Oracle', 'OracleDB', 'MySQL', 'SQL', 'WAS', 'Linux','Docker'],
  },
  {
    label: '협업 & 도구',
    items: ['GitHub',],
  },
]

export const education: EducationItem[] = [
  {
    title: '충청대학교 컴퓨터전자과',
    subtitle: '전문학사',
    period: '2021.03 - 2023.02',
    details: ['평점 3.99 / 4.5'],
  },
  {
    title: '상당고등학교',
    subtitle: '(문과계열)',
    period: '2016 졸업',
  },
]

export const trainings: TrainingItem[] = [
  {
    title: '클라우드 환경 풀스택 애플리케이션 개발자 양성',
    provider: '한국아이티전문학원',
    period: '2022.09 - 2023.03',
    description: '클라우드 환경에서 애플리케이션을 설계하고 구현하는 실무 중심 교육 과정',
  },
]

export const callToAction: CallToAction = {
  title: '함께 일하고 싶으신가요?',
  message:
    '프로젝트 목표와 사용자 흐름을 빠르게 파악하고 실행으로 옮깁니다. 연락 주시면 최근 작업과 상세 레퍼런스를 공유드릴게요.',
  primary: {
    label: '이력서 다운로드',
    href: '/assets/resume.pdf',
  },
  secondary: {
    label: '메일 보내기',
    href: 'mailto:oceanfromthewave@gmail.com',
  },
}

export const contact: Contact = {
  email: 'oceanfromthewave@gmail.com',
  github: 'https://github.com/oceanfromthewave',
  phone: '010-3176-4123',
  note: '이메일 또는 깃허브 이슈, 전화로 연락 주시면 빠르게 답변드리겠습니다.',
}
