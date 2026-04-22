---
title: "Goal-Based Investing (GBI): 이론·방법론·실무 확장"
subtitle: "MBA Finance Track — 12주 강의 커리큘럼"
course_level: "MBA (Finance Concentration)"
duration: "12 weeks × 3 hours"
language: "Korean / English (mixed)"
tags: [GBI, WealthManagement, BehavioralFinance, PortfolioTheory, Curriculum]
version: "2026-04"
---

# Goal-Based Investing: 이론에서 실무 확장까지

> MBA 금융전공을 위한 12주 GBI 종합 커리큘럼.
> 전통 MPT의 한계 → 행동 포트폴리오 이론 → 다목표 최적화 → 동적·ML 확장 → 실무 적용.

---

## 과목 개요

**GBI(Goal-Based Investing)** 는 "벤치마크 초과수익"이 아니라 **"개인·기관의 구체적 재무 목표 달성 확률 극대화"** 를 목적으로 하는 자산운용 패러다임이다. 최근 10년간 BPT(Behavioral Portfolio Theory)와 LDI(Liability-Driven Investing)의 융합, 동적 최적화(DP/RL), 로보어드바이저·세제·ESG 개인화가 결합되며 자산운용업의 근본 패러다임이 재편되고 있다.

### 학습 목표
1. **Why GBI**: MPT가 개인·기관 자산운용에서 실패하는 이유를 이론적·실증적으로 설명
2. **How GBI**: mental accounting·risk bucketing·LDI·dynamic programming 등 구현 프레임워크 습득
3. **What's Next**: RL·로보어드바이저·세제 최적화·ESG 통합 등 확장 주제 이해
4. **케이스 스터디**: 각 주차별 실제 기관·플랫폼 사례를 통한 비판적 분석 능력

### 평가
- 출석·토론 20% · 케이스 에세이(3회) 30% · 중간 프로젝트 20% · 최종 프로젝트 30%

### 강의 자료 파일 구조

각 주차는 **강의노트(md) 1개 + 인포그래픽(svg) 2개**의 3-file set로 구성된다. 강의노트 내 표준 Markdown 이미지 문법(`![alt](…svg)`)으로 임베드되어 GitHub · Obsidian · VS Code 어디서든 자동 렌더링된다.

```
GBI_Curriculum_Syllabus.md          (본 파일)
Week01_Lecture_Note.md              ← Figure 1 (§2), Figure 2 (§3)
  ├─ Week01_Infographic_MPT_to_GBI.svg
  └─ Week01_Infographic_Chhabra_Pyramid.svg
Week02_Lecture_Note.md              ← Figure 1 (§2), Figure 2 (§5)
  ├─ Week02_Infographic_PT_Curves.svg
  └─ Week02_Infographic_Three_Theories.svg
Week03_Lecture_Note.md              ← Figure 1 (§4), Figure 2 (§5)
  ├─ Week03_Infographic_SPA_to_GBI.svg
  └─ Week03_Infographic_BPT_Geometry.svg
Week04_Lecture_Note.md              ← Figure 1 (§3), Figure 2 (§6)
  ├─ Week04_Infographic_Equivalence.svg
  └─ Week04_Infographic_Aggregate_Numeric.svg
Week05_Lecture_Note.md              ← Figure 1 (§4), Figure 2 (§6)
  ├─ Week05_Infographic_4Step_Iterative.svg
  └─ Week05_Infographic_Brunel_Korea.svg
Week06_Lecture_Note.md              ← Figure 1 (§2), Figure 2 (§5)
  ├─ Week06_Infographic_LDI_to_GBI.svg
  └─ Week06_Infographic_CPPI_Simulation.svg
Week07_Lecture_Note.md              ← Figure 1 (§3), Figure 2 (§6)
  ├─ Week07_Infographic_Multi_Goal_State.svg
  └─ Week07_Infographic_Commercial_Engines.svg
Week08_Lecture_Note.md              ← Figure 1 (§3), Figure 2 (§5)
  ├─ Week08_Infographic_DP_Framework.svg
  └─ Week08_Infographic_DP_vs_TDF.svg
Week09_Lecture_Note.md              ← Figure 1 (§3), Figure 2 (§5)
  ├─ Week09_Infographic_RL_Taxonomy.svg
  └─ Week09_Infographic_Bauman_DRL.svg
Week10_Lecture_Note.md              ← Figure 1 (§1), Figure 2 (§3)
  ├─ Week10_Infographic_RA_Framework.svg   (Grealish-Kolm 5-stage framework, 1교시)
  └─ Week10_Infographic_Korea_RA.svg       (한국 RA 3-레이어 생태계, 3교시)
Week11_Lecture_Note.md              ← Figure 1 (§1), Figure 2 (§1)
  ├─ Week11_Infographic_3Pillar.svg        (Tax·ESG·Alt 3-Pillar Integration, 1교시 시작)
  └─ Week11_Infographic_Korea_Pension.svg  (한국 3층 연금 × ISA Asset Location, 1교시 후반)
Week12_Lecture_Note.md              ← Figure 1 (§1), Figure 2 (§3)
  ├─ Week12_Infographic_Roadmap.svg        (GBI 진화 로드맵 1952~2050, 1교시)
  └─ Week12_Infographic_FinalProject.svg   (3-Option × 6-역량 평가 매트릭스, 3교시)
```

---

## 선수과목 / 준비
- Investments (CAPM·MPT·factor model)
- Financial Econometrics (선형회귀, 시계열 기초)
- 기초 확률·최적화 (Lagrangian, stochastic process)
- 코딩: Python 기초 (NumPy, SciPy 수준; pandas 권장)

### 핵심 참고문헌
- Deguest, Martellini, Milhau, Suri, Wang (2015) — *Goal-Based Investing: Theory & Practice*
- Shefrin & Statman (2000) — *Behavioral Portfolio Theory*, JFQA
- Das, Markowitz, Scheid, Statman (2010) — *Portfolio Optimization with Mental Accounts*, JFQA
- Brunel, J.L.P. (2015) — *Goals-Based Wealth Management*
- Das, Ostrov, Radhakrishnan, Srivastav (2020) — *Dynamic GBWM*
- Das & Varma (2020) — *Dynamic GBWM using Reinforcement Learning*
- Bauman, Gašperov et al. (2024) — *Deep RL for GBI under Regime-Switching*, NLDL
- Grealish & Kolm (2022) — *Robo-Advisory: From Investing Principles and Algorithms to Future Developments*

---

# Part 1. 이론 기초 (Week 1–4)

## Week 1. 왜 GBI인가: 전통 MPT의 한계와 패러다임 전환

### 학습 포인트
- Markowitz MPT의 5가지 가정과 개인·기관 운용에서의 붕괴
- "벤치마크 대비 초과수익" vs "목표 달성 확률"의 존재론적 차이
- GBI의 3대 축: (1) 목표 정의, (2) 리스크 재정의, (3) 동적 배분
- Journal of Wealth Management (1998~) 창간과 산업적 맥락

### 핵심 수식
Markowitz의 고전 효용:
$$
\max_w \; \mathbb{E}[R_p] - \frac{\lambda}{2}\,\mathrm{Var}(R_p), \quad \text{s.t. } w^\top \mathbf{1}=1
$$

GBI의 관점 전환 — 리스크는 분산이 아니라 목표 미달 확률:
$$
\text{Risk}_{\text{GBI}} = \Pr\!\left( W_T < H \right)
$$

여기서 $H$는 목표 문턱(threshold wealth).

### 케이스 스터디
**Yale Endowment의 goal-based framing** — David Swensen의 "spending policy 우선, 자산배분 종속" 구조가 어떻게 pure MPT가 아닌 목표(대학 운영비 실질가치 보전)에서 출발하는지 분석.

### 과제
- Markowitz 최적해를 "한 가계의 3대 목표(은퇴·교육·주택)" 관점에서 재해석하고 한계를 토론

---

## Week 2. 행동재무학적 기초 — Prospect Theory · Mental Accounting · SP/A

### 학습 포인트
- Kahneman-Tversky Prospect Theory: 가치함수·확률가중함수
- Thaler (1985) *Mental Accounting*: 화폐의 비대체성(non-fungibility)
- Lopes (1987) SP/A Theory: Security·Potential·Aspiration
- 전통 vs 행동: "합리적 투자자" 가정의 재구성

### 핵심 수식
Kahneman-Tversky 가치함수:
$$
v(x) = \begin{cases} x^\alpha & x \ge 0 \\ -\lambda(-x)^\beta & x < 0 \end{cases}, \quad \alpha,\beta \in (0,1),\ \lambda>1
$$

확률가중함수(Tversky-Kahneman, 1992):
$$
w(p) = \frac{p^\gamma}{\left(p^\gamma + (1-p)^\gamma\right)^{1/\gamma}}
$$

SP/A 기대 가치:
$$
V = \int v(x)\, dh(F(x))
$$
여기서 $h(\cdot)$는 aspiration을 반영하는 decumulative weighting.

### 케이스 스터디
**Mental accounting의 실증**: 한 가계가 "교육자금 적금 4%"을 유지하면서 동시에 "신용카드 리볼빙 18%"을 지불하는 현상 — 경제학적 비합리성인가, 아니면 심리적 약속장치(commitment device)인가?

### 과제
- 본인의 "멘탈 어카운트 지도" 작성: 목표별 계좌·목표금액·감정가 부여

---

## Week 3. Behavioral Portfolio Theory (BPT) — Shefrin & Statman (2000)

### 학습 포인트
- Friedman-Savage (1948)의 utility puzzle: 보험과 복권을 동시에 구매
- BPT의 피라미드 계층구조: Downside protection → Upside potential
- Single Account (BPT-SA) vs Multiple Account (BPT-MA)
- BPT 효율경계와 MPT 효율경계의 공존 조건

### 핵심 수식
BPT-SA 목적함수 (aspiration level $A$, threshold 초과 확률 $\alpha$):
$$
\max_w \; \mathbb{E}[W] \quad \text{s.t. } \Pr(W \ge A) \ge \alpha
$$

Telser(1956)의 safety-first와 동형:
$$
\max_w \; \mathbb{E}[R_p] \quad \text{s.t. } \Pr(R_p \le R_L) \le \varepsilon
$$

### 케이스 스터디
**Shefrin-Statman의 피라미드와 실제 가계 자산구성**: 미국 SCF(Survey of Consumer Finances) 자료에서 관찰되는 "현금·CD → 채권·연금 → 주식 → 옵션·암호화폐"의 계층을 BPT 프레임으로 해석.

### 과제
- BPT-SA 최적화를 2-자산(주식/채권) 환경에서 수치해 도출 (Jupyter)

---

## Week 4. Mental Accounting Framework — Das·Markowitz·Scheid·Statman (2010)

### 학습 포인트
- MA 프레임워크: BPT + MPT의 수학적 동등성 증명
- VaR 기반 리스크 정의와 MA 최적화의 등가성
- Aggregate portfolio의 MV 효율성 (short-selling 허용 시)
- Short-selling 제약이 가져오는 효용 손실의 크기

### 핵심 수식
각 mental account $i$의 최적화 (목표 $H_i$, 실패확률 상한 $\alpha_i$):
$$
\max_{w_i} \; \mathbb{E}[W_i] \quad \text{s.t. } \Pr(W_i < H_i) \le \alpha_i
$$

이는 다음과 동치임이 증명됨:
$$
\max_{w_i} \; \mu_i^\top w_i - \frac{\lambda_i}{2}\, w_i^\top \Sigma_i w_i
$$
여기서 $\lambda_i$는 VaR 제약으로부터 유도되는 계정별 risk aversion.

총자산 배분:
$$
w^{\text{agg}} = \sum_{i=1}^K \pi_i\, w_i^*, \quad \sum_i \pi_i = 1
$$

### 케이스 스터디
**미국 대형 Wirehouse의 MA 도입**: Morgan Stanley·Merrill Lynch 등의 "Bucket Strategy" 상품이 Das-Markowitz MA 프레임을 어떻게 단순화·상품화했는가.

### 과제
- 3계정(retirement 99% / college 60% / aspiration 20%) MA 최적화를 Python으로 구현하고 aggregate portfolio가 MV 효율선 위에 위치함을 확인

---

# Part 2. 핵심 방법론 (Week 5–8)

## Week 5. Brunel의 Goals-Based Wealth Management — 실무 리스크버킷

### 학습 포인트
- Jean L.P. Brunel의 4-goal 분류: Personal · Market · Aspirational · Legacy
- "Mental accounting은 fungible하게 다루되, 목표는 차별화"의 핵심 통찰
- Needs-based vs goals-based: 위계(hierarchy)의 설계
- 기관형 wealth management(UHNW, family office)로의 확장

### 핵심 프레임

| Goal 유형 | 시간지평 | 성공확률 요구 | 대표 자산 |
|---|---|---|---|
| Personal (생활·보장) | 단기 | 99% | 현금·단기국채 |
| Market (보존·성장) | 중기 | 85% | 분산 주식·채권 |
| Aspirational (확대) | 장기 | 50% | 성장주·PE |
| Legacy (상속) | 초장기 | 75% | 재단·신탁·보험 |

### 케이스 스터디
**UBS·BNY Wealth Management의 Goals-Based Wealth Platform**: 실제 제안서(ISP, Investment Strategy Proposal)에서 Brunel 분류가 어떻게 적용되는가, UHNW 가계 사례 분석.

### 과제
- 가상 UHNW 가계(AUM $50M, 3세대)의 4-bucket 제안서 작성

---

## Week 6. LDI의 GBI 확장 — Martellini·Milhau의 PSP/GHP Framework

### 학습 포인트
- Liability-Driven Investing의 연금기금 기원 (Tepper 1981, Black 1989)
- 개인 은퇴문제로의 확장: replacement income goal
- **Goal-Hedging Portfolio (GHP)** vs **Performance-Seeking Portfolio (PSP)**
- Fund separation theorem의 현대적 확장
- EDHEC Risk Institute의 연구 프로그램

### 핵심 수식
투자자 목표는 은퇴시점 실질 replacement income $L_T$ 달성:
$$
\max \; \Pr\!\left( W_T \ge L_T \right)
$$

자산을 두 축으로 분해:
$$
W_t = \alpha_t^{\text{PSP}}\, S_t^{\text{PSP}} + \alpha_t^{\text{GHP}}\, S_t^{\text{GHP}}
$$

최적 동적배분(risk budget 기반):
$$
\alpha_t^{\text{PSP}} = m \cdot \frac{W_t - F_t}{W_t}, \qquad F_t = \mathrm{PV}_t(L_T)
$$
여기서 $m$은 multiplier, $F_t$는 floor(필수목표 현가), $(W_t-F_t)$는 risk budget.

### 케이스 스터디
**EDHEC-Princeton Retirement Goal-Based Investing Index Series** — Martellini 팀이 실제로 운용 가능하도록 설계한 benchmark 및 그 실증 성과. KRX·KOSPI 대응 benchmark 설계 가능성 토론.

### 과제
- Cash·Bond·Equity 3자산으로 PSP/GHP 동적전략 시뮬레이션 (Monte Carlo 10,000 path)

---

## Week 7. Multi-Goal Optimization — 여러 목표의 동시 최적화

### 학습 포인트
- 단일계정 MA vs 다목표 동시최적화의 차이
- 목표 간 **우선순위(priority)**와 **대체가능성(substitutability)**
- 자원제약 하 목표별 자금할당(funding ratio)의 동학
- 3rd-eyes Analytics·Ortec OPAL 같은 상용 엔진의 알고리즘 구조

### 핵심 수식
$K$개 목표, 초기자산 $W_0$, 각 목표 현가 $F_i$:

**Step 1 — 자금할당(mental accounting layer):**
$$
\pi_i = \frac{F_i}{\sum_{j=1}^K F_j}, \quad W_0^i = \pi_i\, W_0
$$

**Step 2 — 각 계정 최적화:**
$$
w_i^* = \arg\max_{w_i} \; \Pr\!\left( W_T^i \ge H_i \,\big|\, W_0^i, w_i \right)
$$

**Step 3 — 목표 간 rebalancing rule** (surplus transfer):
$$
\text{if } W_t^i > H_i^{\text{lock}}, \quad \text{transfer excess to } j = \arg\min_k \mathrm{FR}_k
$$

여기서 funding ratio $\mathrm{FR}_i = W_t^i / F_t^i$.

### 케이스 스터디
**Datos Insights(2024) 6대 벤더 비교**: AdvisorEngine, Envestnet MoneyGuide Pro, GMO Nebo, MSCI WealthBench, Ortec OPAL, Voyant — 6개 상용 GBI 엔진의 방법론 차이와 강약점.

### 과제
- 4-목표(주택·교육·은퇴·유산) 가계의 multi-goal 최적화 시뮬레이터 작성

---

## Week 8. Dynamic GBWM — Das·Ostrov (2020) 동적 계획법

### 학습 포인트
- 정적 buy-and-hold vs 동적 재조정(dynamic rebalancing)의 차이
- **Dynamic Programming via Efficient Frontier**: 상태-행동 공간 설계
- Bellman 방정식의 GBI 특화 형태
- Target-Date Fund(TDF) 대비 성과 우월성 실증
- Glide path의 내생화(endogenous glide path)

### 핵심 수식
상태: 시점 $t$의 자산 $W_t$, 목표 $H$ (만기 $T$).

Value function:
$$
V(W_t, t) = \max_{w \in \mathcal{W}_{\text{eff}}} \; \mathbb{E}\!\left[ V(W_{t+1}, t+1) \,\big|\, W_t, w \right]
$$

말단조건:
$$
V(W_T, T) = \mathbf{1}\{W_T \ge H\}
$$

동적 자산배분은 $w^*(W_t, t)$로 **상태의존적**: 자산이 목표보다 크게 앞서면 de-risking, 뒤처지면 risk-on.

### 케이스 스터디
**Das-Ostrov vs 대표적 TDF(Vanguard 2045)**: 동일 목표·동일 초기자산에서 동적 GBWM 전략이 TDF 대비 성공확률을 얼마나 높이는가. 민감도(변동성·상관계수)에 대한 robustness.

### 과제
- 20년·단일목표·2자산 환경의 동적 GBWM DP solver 구현. 성공확률 vs TDF 비교.

---

# Part 3. 확장 및 실무 (Week 9–12)

## Week 9. Reinforcement Learning 기반 GBI

### 학습 포인트
- DP의 차원의 저주와 RL의 우회 (Das & Varma 2020)
- Model-free RL vs model-based: 시장모델 오지정 robustness
- Regime-switching 환경에서의 RL (Bauman et al. 2024, NLDL)
- Quantile·Rank-dependent utility + policy gradient (Coache-Jaimungal 2024)
- Halperin의 G-Learner: IRL로 투자자 선호 추정

### 핵심 수식
MDP 정식화:
$$
\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, r, \gamma \rangle
$$

- 상태 $s_t = (W_t, t, \text{regime}_t)$
- 행동 $a_t \in \mathcal{W}_{\text{eff}}$
- 보상: 일반적으로 $r_T = \mathbf{1}\{W_T \ge H\}$ 또는 shortfall $-\max(H-W_T, 0)$

Policy gradient:
$$
\nabla_\theta J(\theta) = \mathbb{E}_{\pi_\theta}\!\left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t | s_t)\, R_t \right]
$$

Risk-aware 목적 (CVaR):
$$
J_{\text{CVaR}_\alpha}(\theta) = \mathbb{E}\!\left[ R \,\big|\, R \le \mathrm{VaR}_\alpha(R) \right]
$$

### 케이스 스터디
**Bauman et al. (2024)의 regime-switching GBI**: HMM으로 시장 레짐 탐지 후 PPO로 policy 학습. 정적 전략·DP·RL의 성과 비교. 데이터 효율성·과적합·OOS 성능을 비판적으로 평가.

### 과제
- Stable-Baselines3 PPO로 단일목표 GBWM 환경을 훈련하고 DP 해와 비교

---

## Week 10. 로보어드바이저와 GBI의 대중화

### 학습 포인트
- Robo-advisor 산업 개관 (Grealish & Kolm 2022): Betterment·Wealthfront·Schwab·Vanguard
- 2024년 기준 AUM $3.5T 시장 규모와 확장 동력
- Goal-based UX: 목표 입력 → 제안 → 시뮬레이션 → 모니터링
- Tax-loss harvesting(TLH) · direct indexing의 GBI 통합
- 한국의 로보어드바이저 테스트베드와 KIC/NPS형 기관응용 차이

### 핵심 수식
Tax-aware after-tax wealth:
$$
W_T^{\text{AT}} = W_T - \tau_{\text{cg}} \cdot \max(W_T - B_0, 0) + \text{TLH credit}_T
$$

TLH로 실현되는 tax alpha (연율):
$$
\alpha_{\text{TLH}} \approx \tau_{\text{cg}} \cdot \sigma^2 \cdot f(\text{wash-sale, harvest frequency})
$$

### 케이스 스터디
**Betterment의 goal-based UX 리버스 엔지니어링**: 실제 화면·알고리즘 공개문서·학술 분석을 통해 "어떤 MA/BPT 모델이 뒷단에 있는가"를 추론. 개인화·AI 개입의 한계 토론.

### 과제
- 한국 로보어드바이저 3개의 GBI 구현 방식 비교 분석 리포트 작성

---

## Week 11. Tax·ESG·Alternative 통합 GBI

### 학습 포인트
- **Tax-aware GBI**: after-tax goal 정의, asset location vs asset allocation
- **ESG-aware GBI**: 가치 부합 제약조건 vs 효율경계 왜곡 trade-off
- **Alternative assets**: PE·부동산·헤지펀드의 GBI 통합 (illiquidity premium, J-curve)
- 기관투자자의 GBI: 연금·국부펀드의 liability matching과의 접점

### 핵심 수식
ESG 제약 하 MA 최적화:
$$
\max_w \; \Pr(W_T \ge H) \quad \text{s.t. } \mathrm{ESG}(w) \ge \underline{\mathrm{ESG}},\ w^\top \mathbf{1}=1
$$

Asset location (세제계정별 최적 자산배치):
$$
\min_{\{w_k\}} \; \sum_k \tau_k \cdot \text{taxable income}_k(w_k) \quad \text{s.t. } \sum_k W_k w_k = w^{\text{target}}
$$

### 케이스 스터디
**국부펀드의 GBI 적용 가능성**: 연금형 장기부채(복지지출·세대간 이전)를 liability로 본 SWF의 PSP/GHP 구조화. 국부펀드가 GBI 프레임을 채택할 때의 ALM·거버넌스 이슈.

### 과제
- 가상 국부펀드의 3-goal(세대간 이전·경제안정·인프라 투자) 구조 설계

---

## Week 12. 종합 — GBI의 미래와 산업적 함의

### 학습 포인트
- GBI 연구 로드맵: mass customization · 생성형 AI · 개인 수준 인과추론
- 표준화 이슈: CFA Institute·GIPS의 GBI 성과측정 표준 논의
- 자산운용업 수익구조의 변화: AUM 기반 수수료 → outcome-based fee
- 규제·신탁의무: 한국 자본시장법·미국 Reg BI 프레임에서의 GBI

### 논점
1. **GBI는 진정한 패러다임 전환인가, 리브랜딩인가?**
2. 로보+LLM 시대의 advisor 역할 재정의
3. 개인 수준 **digital twin** 및 causal simulation의 가능성
4. 아시아·한국 wealth management에서의 GBI 현지화 과제

### 최종 프로젝트
아래 중 택 1, 15p 이내 리포트 + 10분 발표.

**Option A (이론):** 특정 GBI 변형(예: Rank-dependent GBI, CVaR-GBI) 논문 1편을 비판적으로 재현하고 확장 제안.

**Option B (실무):** 한국 가상 중산층·UHNW 가계·기관 중 하나를 선택, full GBI 제안서 작성 (4-bucket 구조·PSP/GHP 설계·동적 re-balancing rule·KPI).

**Option C (기술):** RL 기반 GBI 시뮬레이터를 구현, 정적·DP·RL 세 전략을 multi-goal·multi-asset 환경에서 benchmarking.

---

## 부록 A. 주차별 핵심 논문 1편 (필독)

| Week | Core Paper |
|---|---|
| 1 | Chhabra (2005), "Beyond Markowitz", *JWM* |
| 2 | Thaler (1985), "Mental Accounting and Consumer Choice", *Marketing Sci.* |
| 3 | Shefrin & Statman (2000), "Behavioral Portfolio Theory", *JFQA* |
| 4 | Das, Markowitz, Scheid, Statman (2010), "Portfolio Optimization with Mental Accounts", *JFQA* |
| 5 | Brunel (2015), *Goals-Based Wealth Management*, Ch. 1–3 |
| 6 | Martellini & Milhau (2017), "Mass Customization vs Mass Production in Retirement", *JPM* |
| 7 | Deguest et al. (2015), EDHEC Working Paper (goal allocation framework) |
| 8 | Das, Ostrov, Radhakrishnan, Srivastav (2020), "Dynamic GBWM", *Comp. Mgmt. Sci.* |
| 9 | Das & Varma (2020), "Dynamic GBWM using RL", *JFDS* |
| 10 | Grealish & Kolm (2022), "Robo-Advisory", *SSRN* |
| 11 | Chhabra (2005) + Brunel (2018) *Alternative Assets in GBI* |
| 12 | Martellini (2019), "From Asset Allocation to Goals-Based Investing", *EDHEC* |

## 부록 B. 실습 환경
- Python 3.11, Jupyter, `numpy` / `scipy` / `cvxpy` / `pandas`
- 동적 최적화: `scipy.optimize`, 동적계획법은 직접 구현
- RL: `stable-baselines3`, `gymnasium`
- 데이터: Ken French factor data, KRX 공공데이터, FRED
