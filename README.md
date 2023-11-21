# 문어상점 🐙

<br />

### ✨ 서비스 소개 ✨

#### 제품 등록, 장바구니 추가, 주문하기 등이 가능한 식자재 쇼핑몰을 구현했습니다. 
1. 회원가입, 로그인, 회원정보 수정 등 **유저 정보 관련 CRUD** 
2. **제품 목록**을 조회 및, **제품 상세 정보**를 조회 가능함. 
3. 장바구니에 제품을 추가할 수 있으며, **장바구니에서 CRUD** 작업이 가능함.
4. 장바구니는 서버 DB가 아닌, 프론트 단에서 저장 및 관리됨 (Session storage)
5. 장바구니에서 주문을 진행하며, **주문 완료 후 조회 및 삭제**가 가능함.
6. 주문 완료 시 Mail 발송 서비스 구현

<br />

### 1. 기능별 시연 영상(토글하여 확인해주세요)

<details><summary>로그인, 회원가입, 이메일 찾기</summary>

![문어상점-로그인,회원가입,이메일찾기](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/0262f37c-91cc-4cca-81e4-b5261271f764)

</details>
<br />

<details><summary>메인 페이지, 상품 페이지</summary>

![문어상점-메인페이지,상품페이지](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/b3c626b6-f81a-48b4-9383-ab2e58d768dd)

</details>
<br />
<details><summary>장바구니 및 결제</summary>

![문어상점-장바구니 및 결제 페이지](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/d260eed5-8eb7-4e1e-89f7-ec608215f534)

</details>
<br />

<details><summary>유저 정보 및 주문 관리</summary>

![문어상점-유저 정보 및 주문 관리 페이지](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/289caf6e-d10c-4b77-aacd-ba7eb50efdd5)

</details>
<br />

<details><summary>관리자 로그인 및 주문 관리</summary>

![문어상점-관리자 로그인 및 주문 관리 페이지](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/fc2d4ae7-7db0-423d-a368-bfd0101278f2)

</details>
<br />

<details><summary>상품 추가,상품 수정, 상품 삭제</summary>

![문어상점-상품 추가,상품 수정, 상품 삭제](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/3e45fa26-72a6-44ca-b58a-882f37826443)

</details>
<br />

<details><summary>카테고리 수정</summary>

![문어상점-카테고리 변경](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/33ce259f-4efc-434a-b201-cbceb626dda5)

</details>
<br />

<details><summary>무한스크롤 및 스크롤 이동 버튼</summary>

![문어상점-무한스크롤 및 스크롤 이동 버튼](https://github.com/tokkissi/elice-Pj-1-/assets/53216523/44d6561c-02e9-4b71-8c35-eb6190a49880)

</details>
<br />


## 2. TECH STACK
### 2-0. Common
<div align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://camo.githubusercontent.com/e2d01d9b7b9d6db8e4b7b32478081abea2b2eefc16d0c130fbaab390d513fc42/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d45534c696e7426636f6c6f723d344233324333266c6f676f3d45534c696e74266c6f676f436f6c6f723d464646464646266c6162656c3d">
<img src="https://camo.githubusercontent.com/0456715c6d0d037b19e6c0dc17370ad1ca16690f00985645e6f862cdcfe5d019/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d507265747469657226636f6c6f723d323232323232266c6f676f3d5072657474696572266c6f676f436f6c6f723d463742393345266c6162656c3d">
<img src="https://camo.githubusercontent.com/e817caabb0fdceee7c541f02e7da50553b694514e9a5d71cdf66a2adfbaa3148/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f74696f6e26636f6c6f723d303030303030266c6f676f3d4e6f74696f6e266c6f676f436f6c6f723d464646464646266c6162656c3d">
<img src="https://camo.githubusercontent.com/95900cde890a26bb00d39efb39a0047d253ffe5fef66f19c10b351378f459e2d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4769744c616226636f6c6f723d464336443236266c6f676f3d4769744c6162266c6f676f436f6c6f723d464646464646266c6162656c3d">
</div>

<br />

### 2-1. FE
<div align="center">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://camo.githubusercontent.com/4a3f0587c94b79ae7809a09a08482e41de562e1254f9cd66ef74d84566b31fd5/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d42756c6d6126636f6c6f723d323232323232266c6f676f3d42756c6d61266c6f676f436f6c6f723d303044314232266c6162656c3d">
<img src="https://camo.githubusercontent.com/75ddce514d1531301dd02977fe246e648ad6ba6d1d62e7b494557c71aae1af69/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d466f6e742b417765736f6d6526636f6c6f723d353238444437266c6f676f3d466f6e742b417765736f6d65266c6f676f436f6c6f723d464646464646266c6162656c3d">
</div>

- **Router - Page** Page render management
- Intersection observer를 이용한 파일 Lazy loading
- JWT - sessionStorage를 사용한 authorization check
- Daum Postcode Service를 사용한 주소 검색 구현
- Bulma css, font awesome을 사용한 풍부한 css 스타일

### 2-2. BE

<div align="center">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<br>
<img src="https://camo.githubusercontent.com/e72c2a6e52df2d1ff78867b6eafa3a97a48267bcbe22710fbf204883d056a6f7/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d416d617a6f6e2b533326636f6c6f723d353639413331266c6f676f3d416d617a6f6e2b5333266c6f676f436f6c6f723d464646464646266c6162656c3d">
<img src="https://camo.githubusercontent.com/a48abfcc6894d90cbe2fa4c9ae464617287749d48b3de47a9d0a5d07551d37a2/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e47494e5826636f6c6f723d303039363339266c6f676f3d4e47494e58266c6f676f436f6c6f723d464646464646266c6162656c3d">
<img src="https://camo.githubusercontent.com/f24e7b5ea96b487071c435d41ab16398c5c33302f3b7d393c6b57ad10cf3b515/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d504d3226636f6c6f723d324230333741266c6f676f3d504d32266c6f676f436f6c6f723d464646464646266c6162656c3d">
<img src="https://camo.githubusercontent.com/d2737af1a4caf34d83fc933874a0c907b6419848a41f8e3e914a7c35356ca3cf/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d506f73746d616e26636f6c6f723d464636433337266c6f676f3d506f73746d616e266c6f676f436f6c6f723d464646464646266c6162656c3d">
</div>

- **DB - Service - Controller - Router** Layer Architecture
- AWS S3 Bucket을 이용한 상품 이미지 관리
- Joi Library를 이용한 Validation
- Nodemailer Library를 이용한 Mailing Service

## 3. 인프라 구조

![image](https://i.ibb.co/9tGxmx0/image.png)<br />



## 4. 제작자

| 이름 | Position | Task |
| ------ | ------ | ----- |
| 김제원 | 팀장/FE | 발표, Main page, menu bar structure and style |
| 김지윤 | FE | Cart, category, item page structure and style  | 
| 박세민 | FE | Individual, data-control page structure and style |
| 한대근 | BE | Users/Items API, Validation, Deployment |
| 박지수 | BE | Categories/Admin/Orders API, Validation |

<br />
---

Copyright 2022 엘리스 Inc. All rights reserved.
본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
