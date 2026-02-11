# てづっぴのプロフィール | tzp's Profile

[![Deploy to GitHub Pages](https://github.com/tzptzptzptzptzp/profile/actions/workflows/deploy.yml/badge.svg)](https://github.com/tzptzptzptzptzp/profile/actions/workflows/deploy.yml)

エンジニアてづっぴの個人プロフィールサイトです。吹き出し形式でインタラクティブに自己紹介が表示されます。

🌐 **公開URL**: [https://tzptzptzptzptzp.github.io/profile/](https://tzptzptzptzptzp.github.io/profile/)

## ✨ 特徴

- 🎨 **吹き出しアニメーション** - 750ms間隔で順次表示される自己紹介メッセージ
- 🌏 **多言語対応** - 日本語/英語の切り替え機能
- 🌓 **ダークモード対応** - システム設定に応じた自動切り替え
- 👾 **キャラクターアニメーション** - 浮遊アニメーション付きキャラクター「美少女ちゃん」
- 📱 **レスポンシブデザイン** - モバイル・デスクトップ両対応
- 🔗 **SNS対応** - Open Graph・Twitter Cards完備
- ⚡ **高速表示** - 静的サイト生成による高速読み込み

## 🛠️ 技術スタック

- **Frontend**: Next.js 16.1.6 + React 19.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Actions + GitHub Pages
- **Animation**: CSS Animations

## 🎯 主な機能

### インタラクティブな自己紹介

- 吹き出し形式で段階的に情報を表示
- 左右交互に配置されるチャット風UI
- 自動スクロール機能付き

### 言語切り替え

- JP/EN対応のトグルスイッチ
- コンテンツの完全な多言語化
- カスタムフック (`useLanguageState`) による状態管理

### アニメーション

- **吹き出し**: フェードイン + スケール変化
- **キャラクター**: 3秒周期の浮遊アニメーション
- **スムーズなスクロール**: 新規メッセージ表示時の自動追従

## 📁 プロジェクト構成

```
profile/
├── app/
│   ├── globals.css       # グローバルスタイル・アニメーション定義
│   ├── layout.tsx        # ルートレイアウト
│   ├── metadata.ts       # SEO・OGP設定
│   └── page.tsx          # メインページ
├── components/
│   ├── Balloon.tsx       # 吹き出しコンポーネント
│   ├── CharacterImage.tsx # キャラクター画像コンポーネント
│   ├── DialogueArea.tsx  # 対話エリアコンポーネント
│   ├── Frame.tsx         # フレームコンポーネント
│   └── LanguageToggle.tsx # 言語切り替えボタン
├── constants/
│   └── profile.ts        # プロフィールデータ（日本語・英語）
├── hooks/
│   └── useLanguageState.ts # 言語状態管理フック
├── lib/
│   └── utils.ts          # ユーティリティ関数
└── public/
    ├── bisyojo_chan.png  # キャラクター画像
    ├── OGP.png          # SNS共有用画像
    └── favicon_*.ico    # ファビコン
```

## 🚀 開発・デプロイ

### 開発環境での実行

```bash
# 依存関係のインストール
npm ci

# 開発サーバー起動
npm run dev

# キャッシュクリア付き開発サーバー起動
npm run dev:clean
```

### ビルド・デプロイ

```bash
# 本番ビルド
npm run build

# キャッシュクリア付きビルド
npm run build:clean

# 静的ファイル生成（outディレクトリに出力）
npm run build
```

### 自動デプロイ

- `main` ブランチへのプッシュで自動的にGitHub Pagesにデプロイ
- Node.js 20.x環境でビルド・デプロイを実行

## 🎨 カスタマイズ

### プロフィール内容の変更

`constants/profile.ts` で日本語・英語両方のメッセージを編集できます：

```typescript
export const PROFILE_JA = [
  "こんにちは、てづっぴです🦄！",
  // ... その他のメッセージ
];

export const PROFILE_EN = [
  "Hello, I'm Tedzuppi🦄!",
  // ... その他のメッセージ
];
```

### メタデータの変更

`app/metadata.ts` でSEO・SNS設定を管理：

```typescript
const SITE_TITLE = "てづっぴのプロフィール | tzp Profile";
const SITE_URL = "https://tzptzptzptzptzp.github.io/profile/";
// ... その他の設定
```

### スタイルのカスタマイズ

- `app/globals.css` - カスタムアニメーション・ユーティリティクラス
- Tailwind CSS - コンポーネント内でのスタイリング

## 📄 利用について

技術的な実装（コンポーネント構成、アニメーション、多言語対応など）は参考・学習目的での利用を歓迎します。

ただし、以下の点にご注意ください：

- 個人情報・プロフィール内容の流用はご遠慮ください
- 画像の無断使用はご遠慮ください
- 技術的な実装を参考にする場合は、独自のコンテンツに置き換えてください

---

Created with ❤️ by [てづっぴ (Tedzuppi)](https://github.com/tzptzptzptzptzp)
