# 변경 이력 (CHANGELOG)

모든 주요 변경사항을 기록합니다. 형식은 [Keep a Changelog](https://keepachangelog.com/)를 따릅니다.
버전 번호는 [Semantic Versioning](https://semver.org/)을 따릅니다.

---

## [1.0.0] - 2026-04-22

### 최초 공개 릴리즈

**37개 학습 자료 전체 포함**:

#### Syllabus (1개)
- `GBI_Curriculum_Syllabus.md` — 12주 × 3시간 MBA Finance Track 종합 syllabus

#### 주차별 강의노트 (12개)
- **Part 1. 이론 기초 (W1–W4)**
  - W1: 왜 GBI인가 — MPT의 한계와 패러다임 전환
  - W2: 행동재무학 기초 — PT · Mental Accounting · SP/A
  - W3: Behavioral Portfolio Theory (Shefrin-Statman)
  - W4: Mental Accounting Framework (Das-Markowitz-Scheid-Statman)
- **Part 2. 핵심 방법론 (W5–W8)**
  - W5: Brunel의 Goals-Based Wealth Management (4-bucket)
  - W6: LDI의 GBI 확장 — PSP/GHP (Martellini-Milhau)
  - W7: Multi-Goal Optimization
  - W8: Dynamic GBWM — Das-Ostrov 동적 계획법
- **Part 3. 확장 및 실무 (W9–W12)**
  - W9: Reinforcement Learning 기반 GBI
  - W10: 로보어드바이저와 GBI의 대중화
  - W11: Tax · ESG · Alternative 통합 GBI
  - W12: 종합 — GBI의 미래와 산업적 함의

#### 인포그래픽 (24개 SVG)
- 각 주차당 2개 · Obsidian wikilink 임베드 지원
- 주요 도식: MPT→GBI 패러다임 전환, Chhabra 피라미드, PT 가치함수,
  BPT 기하, MA 동등성, Brunel 4-goal, PSP/GHP, CPPI, Multi-Goal 상태공간,
  DP Bellman, RL Taxonomy, Bauman DRL, RA Framework, 한국 RA 생태계,
  3-Pillar(Tax/ESG/Alt), 한국 3층 연금, GBI 진화 로드맵, 최종 프로젝트 매트릭스

#### 리포 인프라
- README.md · LICENSE (CC BY-NC 4.0) · .gitignore · CONTRIBUTING.md
- docs/index.html (GitHub Pages 랜딩)

### 설계 원칙

- **3-file set per week**: 강의노트(md) + 인포그래픽(svg) × 2
- **Obsidian Vault 호환**: `![[…svg]]` wikilink 임베드
- **이론·수식·케이스·과제 통합**: 각 주차 학습포인트 · 핵심수식 · 실제 사례 · 과제 제시
- **한국 시장 연계**: 코스콤 RA 테스트베드 · 미래에셋 TDF · KB 케이봇쌤 · 한국 3층 연금 등

---

## [미공개] - Future Roadmap

### 계획 중

- **Jupyter 실습 노트북**: W4 MA 최적화 · W6 PSP/GHP Monte Carlo · W8 DP solver · W9 PPO 훈련
- **영문판 번역**: MBA 영어 트랙 대응
- **GitHub Pages 고도화**: 반응형 목차 · 수식 KaTeX 렌더링
- **보충 자료**: 논문 해설 · 케이스 스터디 확장 · 연습문제 풀이

---

## 버전 규칙

- **MAJOR** (1.x.x → 2.x.x): 커리큘럼 구조 대폭 개편
- **MINOR** (x.1.x → x.2.x): 신규 주차·부록·자료 추가
- **PATCH** (x.x.1 → x.x.2): 오타·수식·링크 수정
