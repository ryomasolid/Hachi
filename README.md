## Getting Started

First, run the development server:

```
npm run dev
```

## UI

npm i @mui/material @emotion/react @emotion/styled @mui/material-nextjs @emotion/cache

## Prettier

npm i --save-dev prettier eslint-config-prettier

```
.eslintrc.json
{
- "extends": "next/core-web-vitals"
+ "extends": ["next/core-web-vitals", "prettier"]
}
```

```
package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
+   "format": "prettier --check --ignore-path .gitignore .",
+   "format:fix": "prettier --write --ignore-path .gitignore ."
  },
}
```

"format"：オプションに従って、対象ファイルのフォーマットをチェック
"format:fix"：オプションに従って、対象ファイルのフォーマットを自動整形

## テスト環境構築

npm install --save-dev jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

jest.config.mjsを作成
