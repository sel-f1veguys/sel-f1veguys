## Commit Message


> 📌 Feat: [FE/BE] 로그인 기능 구현 </br>
> Fix: [BE] 회원가입 시 비밀번호 정규식 오류 해결 </br>
> ( Keyword 시작은 대문자 )

| 키워드 | 설명 |
| --- | --- |
| Feat | 기능 (새로운 기능) |
| Fix | 버그 (버그 수정) |
| Refactor | 리팩토링 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Comment | 필요한 주석 추가 및 변경 |
| Style | 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음) |
| Docs | 문서 수정 (문서 추가, 수정, 삭제, README) |
| Test | 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음) |
| Chore | 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등) |
| Init | 초기 생성 |
| Rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우 <br/> 단순 변수명, 함수명 등의 변경만 수행한 경우 |
| Remove | 파일을 삭제하는 작업만 수행한 경우 |

---

## Branch

https://junjunrecord.tistory.com/131


> 📌 feature/{issue-number}-{feature-name} </br> 
> ex) feature/1-init-project </br> 
> ex) feature/2-build-gradle-script-write



- feature 하나 개발 완료될 때마다 develop branch에 넣어두기
- setting/~~
- bug/~~~
- master branch
    - 매 sprint마다 develop branch merge
    - v0.1.0, v0.2.0, …

---

## Issue

### title

- [BE/FE] 구현할 기능
    
    ex) [FE] 마이페이지 정보 조회
    

### body

```markdown
### 📌 설명
<!-- 진행할 작업에 대한 설명 작성 -->

### ✅ 상세 내용
<!-- 해당 작업을 위한 하위 태스크 작성 -->
- [ ] 세부사항1
- [ ] 세부사항2
- [ ] 세부사항3

### ⏱ 예상 소요 시간
### 📚 참고 자료 (선택)
```

### Label

https://velog.io/@rimo09/Github-github-label-한번에-적용하기

```json
[
	{
    "name": "🌱 Backend",
    "color": "D4C5F9",
    "description": "백엔드 개발"
  },
  {
    "name": "🎨 Frontend",
    "color": "FEF2C0",
    "description": "프론트엔드 개발"
  },
  {
    "name": "⚙ Setting",
    "color": "e3dede",
    "description": "개발 환경 세팅"
  },
  {
    "name": "✨ Feature",
    "color": "a2eeef",
    "description": "기능 개발"
  },
  {
    "name": "🌏 Deploy",
    "color": "C2E0C6",
    "description": "배포 관련"
  },,
  {
    "name": "🐞 BugFix",
    "color": "d73a4a",
    "description": "Something isn't working"
  },
  {
    "name": "📃 Docs",
    "color": "1D76DB",
    "description": "문서 작성 및 수정 (README.md 등)"
  },
  {
    "name": "🔨 Refactor",
    "color": "f29a4e",
    "description": "코드 리팩토링"
  },
  {
    "name": "🙋‍♂️ Question",
    "color": "9ED447",
    "description": "Further information is requested"
  },
  {
    "name": "✅ Test",
    "color": "ccffc4",
    "description": "test 관련(storybook, jest...)"
  }
]
```

---

## PR

### **title**

[이슈번호] ~~ 기능 구현

- ex) [#1] 로그인 기능 구현

### body
```markdown
## 개요
<!---- 변경 사항 및 관련 이슈에 대해 간단하게 작성해주세요. 어떻게보다 무엇을 왜 수정했는지 설명해주세요. -->

## PR 유형
어떤 변경 사항이 있나요?

- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] CSS 등 사용자 UI 디자인 변경
- [ ] 코드에 영향을 주지 않는 변경사항(오타 수정, 탭 사이즈 변경, 변수명 변경)
- [ ] 코드 리팩토링
- [ ] 주석 추가 및 수정
- [ ] 문서 수정
- [ ] 테스트 추가, 테스트 리팩토링
- [ ] 빌드 부분 혹은 패키지 매니저 수정
- [ ] 파일 혹은 폴더명 수정
- [ ] 파일 혹은 폴더 삭제

## PR Checklist
PR이 다음 요구 사항을 충족하는지 확인하세요.

- [ ] 커밋 메시지 컨벤션에 맞게 작성했습니다
- [ ] 변경 사항에 대한 테스트를 했습니다.(버그 수정/기능에 대한 테스트).
```