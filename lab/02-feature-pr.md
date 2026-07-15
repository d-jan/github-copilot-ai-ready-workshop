# Lab 02: PR を作成し、main へ反映する

**テーマ:** Main へのマージに機械的な品質ゲートと人の確認フローを組みこむ。

## シナリオ

- GitHub Copilot App では PR の自動作成や Auto マージが可能だが、認識負債・齟齬を考慮して、本ラボではこれらは実施しない。
- エージェントにはドラフト案だけを作成させ、PR タイトル・本文をを人が確認する手順を踏む。
- 依存ガードレールやテスト、型チェック・ビルド検証といったゲートを、サーバー側の CI に組み込むことで、機械的に品質を担保する。

## 前提条件

- Lab 01 の実装・検証とコミットが完了していること。
- GitHub Actions が利用できる。

## 手順

### 1. Create draft PR でタイトルと本文を確認する

コミット完了後、GitHub Copilot App UI の **Create draft PR** を選ぶ。

Draft PR が作成されたら、github.com から [Pull Requests] の内容を確認する。

- base リポジトリが upstream ではなく、自身のフォークリポジトリであることを確認する。
- base ブランチが `main` であることを確認する。
- タイトルが本実装とマッチしているか、本文に背景や変更内容等が含まれているか確認する。
- CI が自動で走り、正常に完了しているかを確認する。
- コンフリクトが発生していないか確認する。

### 2. copilot にレビューを依頼する

**View session** から
レビュー完了後

### 3. main へマージする

Draft Pull Request の CI がすべて成功していることを確認する。

次を Copilot App に貼り付ける。

```text
この Pull Request の CI チェックの状態を説明してください。
npm ci が何を保証しているかも述べてください。
```

CI と Draft Pull Request の内容を確認したら Ready for review に変更する。
その後、**Copilot App の UI** 上の「Merge pull request」ボタンを押して
自分の workshop fork の `main` へマージする。

## 期待する結果

- 人が確認したコミットメッセージ。
- 人が確認したタイトルと本文を持つ Feature PR。
- `main` に商品詳細ルーティングと AI Ready なルール・手順・検証が反映される。
- 次のラボで Cloud Agent が `main` の Instructions、AGENTS、Skills を参照できる。

> CI の `npm ci` は、lockfile と `package.json` が不整合だと失敗する。
> Lab 01 の Hook が手元で防いだ事故を、CI が最終防波堤として再確認している。

---

← [Lab 01](./01-implement-with-guardrails.md) ・ 次へ → [Lab 03: 運用バグを Cloud Agent へ委託する](./03-delegate-bug-to-cloud-agent.md)
