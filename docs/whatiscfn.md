---
id: whatiscfn
title: AWS CloudFormation とは
sidebar_label: AWS CloudFormation とは
---

## (WIP) 骨子

実践レベルで特によく使用する項目についてまとめる

- 概要
- チュートリアル
  - xxx
- テンプレートの基礎
  - テンプレートリファレンス（簡易版）
  - AWS SAM
  - あまり知られていない書き方レシピ
- 静的構文解析によるテスト

  - Linter
    - `cfn-python-lint`
  - 脆弱性検知
    - cfn-nag
  - 静的構文解析
    - jest とかで
  - プリビルド的な話
    - TaskCat
  - PullRequest 毎、コミット毎に change set を作成し、プレビューする

- 継続的デリバリー
  - 各種 CI ツールとの連携
    - CircleCI
    - GitHub Action
  - テンプレート/デプロイの単位
    - テンプレート間の値受け渡し方法
      - 出力値のエクスポート
      - パラメータとして引きつぐ（シェルで頑張る）
      - Mapping にベタ書きする
  - 障害や有事の際の考慮
  - ドリフト対策
