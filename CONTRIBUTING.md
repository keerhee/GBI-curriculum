# 기여 가이드

본 레포는 **Goal-Based Investing (GBI)** 강의의 공개 자료입니다. 수강생·연구자·실무자 누구나 오류 제보 · 보완 · 확장에 기여할 수 있습니다.

---

## 기여할 수 있는 유형

### 1. 오류·오타 수정 (PR 환영)
- 수식 오류 · 참고문헌 오기 · 오탈자
- 인포그래픽 레이블 오류

### 2. 설명 보완 (Issue 또는 PR)
- 난해한 부분의 예시·직관적 설명 추가
- 최신 논문·사례 추가
- 한국 시장 사례 확장

### 3. 번역 (별도 브랜치 권장)
- 영문판 · 중문판 · 일문판

### 4. 실습 코드 (향후 `docs/labs/` 예정)
- Jupyter 노트북: MA 최적화, PSP/GHP 시뮬레이션, DP solver, RL 훈련 등

---

## 작업 흐름

### 1) 이슈로 먼저 논의
큰 변경(챕터 구조 개편, 신규 주차 추가)은 먼저 이슈에서 논의해 주세요.

작은 수정(오탈자, 링크 수정)은 바로 PR을 올려도 됩니다.

### 2) Fork → Branch → PR

```bash
# 1. 본인 계정으로 fork 후 클론
git clone https://github.com/YOUR_USERNAME/GBI-curriculum.git
cd GBI-curriculum

# 2. 작업 브랜치 생성
git checkout -b fix/week03-typo

# 3. 수정 후 커밋
git add docs/Week03_Lecture_Note.md
git commit -m "fix(W3): BPT-SA 수식 오탈자 수정"

# 4. Fork한 본인 레포로 push
git push origin fix/week03-typo

# 5. GitHub 웹에서 PR 생성
```

### 3) 커밋 메시지 규칙

[Conventional Commits](https://www.conventionalcommits.org/) 형식을 권장합니다.

```
<type>(<scope>): <subject>

예시:
fix(W3): BPT-SA 목적함수 LaTeX 오탈자 수정
feat(W8): Das-Ostrov DP 알고리즘 pseudocode 추가
docs: README 핵심 참고문헌 표 업데이트
chore: .gitignore에 .obsidian/ 추가
```

**type**: `fix` · `feat` · `docs` · `style` · `refactor` · `chore`
**scope**: `W1`~`W12` · `Syllabus` · `Infographic` · `README` 등

---

## 콘텐츠 스타일 가이드

### Markdown

- **헤더 레벨**: H1은 파일당 1개(제목). 본문은 H2부터
- **수식**: `$...$` (인라인) · `$$...$$` (블록). LaTeX 표준 문법
- **인용**: `>` 블록
- **표**: 가능한 한 좌측 정렬 · 수치는 우측 정렬

### 인포그래픽 (SVG)

- `WeekXX_Infographic_<Topic>.svg` 명명 규칙
- 가독성 폰트 크기 ≥ 14px
- 색상: 강의노트 본문과 일관된 팔레트
- 강의노트에서 `![[WeekXX_Infographic_<Topic>.svg]]` wikilink로 임베드

### 한국어·영어 혼용

- 전문용어는 **한글(원어)** 형식으로 첫 등장 시 병기: "행동 포트폴리오 이론(BPT)"
- 이후 약어(BPT) 사용 권장
- 참고문헌 저자·논문제목은 영문 원제 유지

---

## 리뷰 기준

PR 머지 전 확인사항:

- [ ] 변경 의도가 이슈 또는 PR 설명에 명확히 기술됨
- [ ] 기존 수식·인용의 정확성이 해치지 않음
- [ ] 마크다운 문법 오류 없음 (Obsidian·GitHub 웹 양쪽에서 렌더 확인)
- [ ] 인용·출처 정확 (저자·연도·저널·페이지)

---

## 라이선스 동의

PR을 제출함으로써 해당 기여물이 레포의 [CC BY-NC 4.0 라이선스](LICENSE)로 배포됨에 동의하는 것으로 간주됩니다.

---

## 질문·토론

- 일반 질문: [GitHub Issues](https://github.com/keerhee/GBI-curriculum/issues)
- 학술적 토론: Discussions 탭 (향후 개설 예정)
