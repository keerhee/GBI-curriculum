<div align="center">

# Goal-Based Investing (GBI) 강의노트

**MBA 금융전공을 위한 12주 GBI 종합 커리큘럼 — 이론에서 실무 확장까지**

![Duration](https://img.shields.io/badge/curriculum-12_weeks-blue)
![Level](https://img.shields.io/badge/level-MBA_Finance-purple)
![License](https://img.shields.io/badge/license-CC_BY--NC_4.0-orange)
![Update](https://img.shields.io/badge/last_update-2026--04-informational)

[커리큘럼 개요](#커리큘럼-한눈에) · [자료 구조](#자료-구조) · [학습 방법](#학습-방법) · [참고문헌](#핵심-참고문헌)

### [온라인으로 바로 열람하기 →](https://keerhee.github.io/GBI-curriculum/)

Syllabus · 주차별 강의노트 · 인포그래픽을 브라우저에서 바로 확인하세요.

</div>

---

## 이 리포가 무엇인가?

**Goal-Based Investing (GBI)** 는 "벤치마크 초과수익"이 아니라 **"개인·기관의 구체적 재무 목표 달성 확률 극대화"** 를 목적으로 하는 자산운용 패러다임입니다.

본 레포는 MBA Finance 과정에서 12주 × 3시간으로 진행되는 GBI 종합 강의의 **강의노트 + 인포그래픽** 전체 자료를 공개합니다.

- **이론 기초 (W1–W4)**: 전통 MPT의 한계 → 행동재무학 → BPT → Mental Accounting Framework
- **핵심 방법론 (W5–W8)**: Brunel 4-goal · LDI/PSP-GHP · Multi-Goal 최적화 · Dynamic GBWM
- **확장·실무 (W9–W12)**: RL 기반 GBI · 로보어드바이저 · Tax/ESG/Alt 통합 · 산업적 함의

각 주차는 **강의노트(md) 1개 + 인포그래픽(svg) 2개** 로 구성되며, 표준 Markdown 이미지 문법으로 임베드되어 GitHub · Obsidian · VS Code에서 모두 자동 렌더링됩니다.

> **교육·연구 목적 선언**: 본 자료는 학습·연구 목적이며 투자 권유가 아닙니다.

---

## 커리큘럼 한눈에

### Part 1. 이론 기초 (Week 1–4)

| 주차 | 주제 | 핵심 개념 |
|:---:|---|---|
| **W1** | 왜 GBI인가 — MPT의 한계와 패러다임 전환 | Markowitz · Chhabra 피라미드 · 리스크 재정의 |
| **W2** | 행동재무학 기초 — PT · Mental Accounting · SP/A | Kahneman-Tversky · Thaler · Lopes |
| **W3** | Behavioral Portfolio Theory (BPT) | Shefrin-Statman · safety-first · 피라미드 계층 |
| **W4** | Mental Accounting Framework | Das-Markowitz-Scheid-Statman · MV 동등성 |

### Part 2. 핵심 방법론 (Week 5–8)

| 주차 | 주제 | 핵심 개념 |
|:---:|---|---|
| **W5** | Brunel의 Goals-Based Wealth Management | 4-bucket (Personal · Market · Aspirational · Legacy) |
| **W6** | LDI 확장 — PSP/GHP Framework | Martellini-Milhau · risk budget · floor |
| **W7** | Multi-Goal Optimization | 자금할당 · funding ratio · surplus transfer |
| **W8** | Dynamic GBWM — Das-Ostrov 동적 계획법 | Bellman 방정식 · TDF 대비 우월성 |

### Part 3. 확장 및 실무 (Week 9–12)

| 주차 | 주제 | 핵심 개념 |
|:---:|---|---|
| **W9** | Reinforcement Learning 기반 GBI | Das-Varma · Bauman et al. · PPO · CVaR |
| **W10** | 로보어드바이저와 GBI의 대중화 | Grealish-Kolm · TLH · 한국 RA 테스트베드 |
| **W11** | Tax · ESG · Alternative 통합 GBI | after-tax goal · asset location · SWF 적용 |
| **W12** | 종합 — GBI의 미래와 산업적 함의 | outcome-based fee · digital twin · 최종 프로젝트 |

전체 상세 syllabus는 [`docs/GBI_Curriculum_Syllabus.md`](docs/GBI_Curriculum_Syllabus.md) 참조.

---

## 자료 구조

```
GBI-curriculum/
│
├── README.md                                   여기부터 시작
├── LICENSE                                     CC BY-NC 4.0
├── CHANGELOG.md                                버전 변경 이력
├── CONTRIBUTING.md                             기여 가이드
│
└── docs/                                       학습 자료 전체
    ├── index.html                              GitHub Pages 랜딩 페이지
    ├── GBI_Curriculum_Syllabus.md              12주 전체 syllabus
    │
    ├── Week01_Lecture_Note.md                  주차별 강의노트 (12개)
    ├── Week02_Lecture_Note.md
    ├── ...
    ├── Week12_Lecture_Note.md
    │
    ├── Week01_Infographic_MPT_to_GBI.svg       주차별 인포그래픽 (24개)
    ├── Week01_Infographic_Chhabra_Pyramid.svg
    ├── ...
    └── Week12_Infographic_FinalProject.svg
```

각 주차 강의노트는 **2개의 인포그래픽 SVG**를 표준 Markdown 이미지 문법(`![alt](…svg)`)으로 임베드합니다. GitHub 웹 · Obsidian · VS Code 어디서든 자동 렌더링되며, LaTeX 수식(`$…$`, `$$…$$`)도 GitHub 기본 렌더러에서 바로 표시됩니다.

---

## 학습 방법

### 수강생용

```bash
# 1. 리포 클론
git clone https://github.com/keerhee/GBI-curriculum.git
cd GBI-curriculum

# 2. GitHub 웹·Obsidian·VS Code 아무 곳에서 열기
#    - GitHub 웹: https://github.com/keerhee/GBI-curriculum/tree/main/docs
#    - Obsidian:  File → Open vault → docs 폴더 선택
#    - VS Code:   docs/ 폴더를 열고 Markdown Preview

# 3. 순서대로 학습
#    (1) docs/GBI_Curriculum_Syllabus.md  — 전체 개요
#    (2) docs/Week01_Lecture_Note.md      — W1 강의
#    (3) Week02 → ... → Week12
```

### 선수과목 / 준비

- **Investments**: CAPM · MPT · factor model
- **Financial Econometrics**: 선형회귀 · 시계열 기초
- **기초 확률·최적화**: Lagrangian · stochastic process
- **코딩**: Python 기초 (NumPy · SciPy; pandas 권장)
  - 동적 최적화: `scipy.optimize`
  - RL 실습: `stable-baselines3` · `gymnasium`

### 평가 체계

- 출석·토론 20% · 케이스 에세이(3회) 30% · 중간 프로젝트 20% · 최종 프로젝트 30%

---

## 핵심 참고문헌

| Week | Core Paper |
|:---:|---|
| 1 | Chhabra (2005), "Beyond Markowitz", *JWM* |
| 2 | Thaler (1985), "Mental Accounting and Consumer Choice", *Marketing Sci.* |
| 3 | Shefrin & Statman (2000), "Behavioral Portfolio Theory", *JFQA* |
| 4 | Das, Markowitz, Scheid, Statman (2010), "Portfolio Optimization with Mental Accounts", *JFQA* |
| 5 | Brunel (2015), *Goals-Based Wealth Management*, Ch. 1–3 |
| 6 | Martellini & Milhau (2017), "Mass Customization vs Mass Production in Retirement", *JPM* |
| 7 | Deguest et al. (2015), EDHEC Working Paper |
| 8 | Das, Ostrov, Radhakrishnan, Srivastav (2020), "Dynamic GBWM", *Comp. Mgmt. Sci.* |
| 9 | Das & Varma (2020), "Dynamic GBWM using RL", *JFDS* |
| 10 | Grealish & Kolm (2022), "Robo-Advisory", *SSRN* |
| 11 | Chhabra (2005) + Brunel (2018), *Alternative Assets in GBI* |
| 12 | Martellini (2019), "From Asset Allocation to Goals-Based Investing", *EDHEC* |

---

## 라이선스

**Creative Commons BY-NC 4.0**

- **허용**: 학습 · 복습 · 개인 프로젝트 · 비영리 교육 기관 수업 · 포크/수정/재배포(출처 표기)
- **금지**: 상업적 목적 · 출처 미표기 재배포

인용 시:

```
Goal-Based Investing 강의노트 (2026)
https://github.com/keerhee/GBI-curriculum
CC BY-NC 4.0
```

---

## 피드백 · 오류 제보

- 오류·오타·개선 제안: [GitHub Issues](https://github.com/keerhee/GBI-curriculum/issues)
- Pull Request 환영 ([`CONTRIBUTING.md`](CONTRIBUTING.md) 참조)

---

<div align="center">

**준비되셨나요?**

[Syllabus 열기 →](docs/GBI_Curriculum_Syllabus.md) · [W1 강의노트 →](docs/Week01_Lecture_Note.md)

</div>
