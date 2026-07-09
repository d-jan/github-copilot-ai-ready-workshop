# Outdoor eShop — GitHub Copilot ワークショップ用サンプル

登山・キャンプ向けアウトドア用品店の EC サンプルアプリです。
**「既存の SDLC から Agentic DevOps へ」** を体験する GitHub Copilot ハンズオンの教材として作られています。

現状の機能は **商品一覧** と **全文検索** のみ。
ワークショップでは、ここに機能を「エージェントに実装させて」いきます（後述の [ワークショップ課題](#-ワークショップ課題) を参照）。

---

## 🧱 技術スタック

| 項目 | 採用技術 |
| --- | --- |
| フロントエンド | React 18 + TypeScript |
| ビルド/開発サーバー | Vite 6 |
| テスト | Vitest + Testing Library |
| 実行環境 | Node.js 20（Dev Container / Codespaces で固定） |

> バックエンドや外部クラウド（Azure 等）への依存はありません。**手元だけで完結**します。

---

## 🚀 セットアップ

参加者のローカル環境差異に左右されないよう、**Dev Container / GitHub Codespaces を推奨**します。

### 方法1: GitHub Codespaces（最推奨・ブラウザだけで完結）

1. リポジトリの `Code` ボタン → `Create codespace on main`
2. コンテナ構築後、`npm install` が自動実行されます
3. ターミナルで `npm run dev` → 転送されたポートのプレビューを開く

### 方法2: Dev Container（ローカル VS Code + Docker）

1. VS Code で本リポジトリを開く
2. `Reopen in Container` を選択
3. 構築完了後 `npm run dev`

### 方法3: ローカル実行（Node.js 20 が必要）

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173/` を開きます。

---

## 📜 コマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動（ホットリロード） |
| `npm run build` | 型チェック + 本番ビルド |
| `npm test` | Vitest でテストを一度だけ実行 |
| `npm run test:watch` | テストをウォッチモードで実行 |
| `npm run preview` | ビルド成果物をプレビュー |

---

## 📁 ディレクトリ構成

```
src/
├── components/
│   ├── Header.tsx        # ヘッダー（店名・商品数）
│   ├── SearchBar.tsx     # 検索ボックス
│   ├── ProductGrid.tsx   # 商品グリッド
│   └── ProductCard.tsx   # 商品カード
├── data/
│   └── products.ts       # サンプル商品データ（9商品）
├── lib/
│   ├── search.ts         # 全文検索ロジック（純粋関数）
│   └── search.test.ts    # 検索ロジックのテスト
├── types.ts              # Product 型
├── App.tsx               # 画面全体の組み立て
└── main.tsx              # エントリポイント
public/
└── images/               # 商品画像（product1〜9.png）
```

---

## 🎓 ワークショップ課題

このアプリには **あえて実装していない機能** が2つあります。
GitHub Copilot の異なる使い方で、それぞれを実装してみましょう。

### 課題A：商品詳細ページを作る（ローカル Agent Mode 向き）

商品カードをクリックすると詳細ページ（`/product/:id`）に遷移し、
大きな画像・商品名・説明・価格を表示する機能を追加します。

- **なぜローカル Agent Mode か**：レイアウトや画面遷移は
  **ブラウザで見ないと正解が分からない**ため。
  `npm run dev` で表示を見ながら、その場で修正する同期的なループが向いています。

### 課題B：検索結果の価格ソート／絞り込みを追加する（Coding Agent 向き）

`src/lib/search.ts` に価格の並べ替え（昇順・降順）や価格帯フィルタを追加します。
`search.test.ts` に受け入れ条件をテストとして書き、CI で検証します。

- **なぜ Coding Agent（Issue→PR）か**：受け入れ条件を
  **テストで表現でき、テストが通れば正しい**と言えるため。
  画面目視が不要なので、Issue を投げて非同期に任せられます。

### 🧭 使い分けの判断ルール

> **受け入れ条件をテストで表現できる → Coding Agent（Issue→PR）**
> **目で見て確かめたい → ローカル Agent Mode → Push**

---

## 🔍 Coding Agent が作った PR をローカルで検証する

課題Bで Coding Agent が作成した PR は、マージ前に手元で動作確認できます。

```bash
# PR ブランチを取得
gh pr checkout <PR番号>

# 依存インストール & 起動して確認
npm install
npm run dev

# テストを実行
npm test

# 問題なければ承認（直したい場合は PR にコメントで追加指示）
gh pr review <PR番号> --approve
```

---

## 📝 ライセンス

MIT License. 学習・ワークショップ用途で自由にご利用ください。
商品画像は [mslearn-dotnet-cloudnative](https://github.com/MicrosoftDocs/mslearn-dotnet-cloudnative) のサンプル素材を利用しています。
