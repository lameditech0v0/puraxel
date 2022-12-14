This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 폴더 구조

### public

- 이미지 넣는 곳
- json

### pages

- index(main)
- fx5000
- hair
- me

### CSS.module.css

```js
`${_.me__page1__wrap} ${_.main}`;
```

```css
.me__page1__wrap {
  font-size: 16px;
}
```

## 명명 구조

- JS: camelCase
- CSS: page\_\_
- json: 추후결정

## css 컨트롤

- style 폴더에 최상위 scss 파일을 만들어서 안에 각 페이지 scss를 import
- 각 페이지 마다 scss를 import 할 필요 없어짐
- 클래스와 아이디 네임이 간단해질 필요가 있어서 선택

### 폰트

- 폰트만 `vw`
- http://publishing.kr/vw/
- https://netfolder.github.io/vw_calc.html
- 이하 계산 방법

```
1920 1vw(1%) = 19.2

1920 * 0.01 = 19.2

x = 알고 싶은 vw 값

y = 폰트크기

1920 * x = y * 100

x = y * 100 / 기준크기

가로 1920px에서 폰트크기 24px를 원한다면

x = 24 * 100 / 1920

x = 1.25
```

## html 구조

```html
<section>
  <article></article>
  <article></article>
  <article></article>
  <article></article>
</section>
```

- section : Page 감싸는 것
- article : Page 내용들
