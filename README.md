# Camera AI Type

<img width="400" alt="image" src="https://github.com/nepp-tumsat/CameraAIType/assets/83959618/391e8ca3-ae75-4431-b592-7c1e9f229fb6">

サポーターズVol.5ハッカソンで作ったAI英単語帳アプリ  
(2023.0701~0702)

### ※Firebase、OpenAIのAPIKeyが無いと動きません

## こだわりポイント
- OpenAIの画像生成AIを利用することにより、印象に残りやすい画像を生成し、英単語と結び付けられる
- 統一感のあるデザイン、アプリアイコン

## 開発期間
ハッカソンキックオフから開発を始め、1週間ほど

## 使用技術
- HTML/CSS
- JavaScript
- React
- Firebase
- DALL-E(OpenAI画像生成API)

## チーム開発で利用したツール
- Slack
- Discord
- git
- Github
- Sourcetree
- Figma

## チーム構成
- [Mayachiu](https://github.com/Mayachiu) PM, フロント(React), バックエンド(API, Firebase)
- [hashimo000](https://github.com/hashimo000) フロント(React), バックエンド(Firebase)
- [R-lilac](https://github.com/R-lilac) フロント(React, HTML/CSS)
- [mana05-125](https://github.com/mana05-125) デザイン(Figma, Canva), フロント(HTML/CSS)

## 開発環境
- デプロイはせず、ローカル環境にて開発
- メンバー間で使用環境が違うため、npmとyarnが混在
- PRベースの開発（ブランチ名は特に指定せず、コミットメッセージは日本語でわかりやすく）

## 使用ライブラリ
- React
- react-router-dom(画面遷移)
- react-slick(スライド)
- react-loading(ローディングアニメーション)

## 実行方法

```
npm install
```
または
```
yarn install
```

の後

```
npm start
```
または
```
yarn start
```
(必要なライブラリを適宜インストールしてください)

## 環境変数
プロジェクトファイル下に.envを作成し、以下の用に管理
```
REACT_APP_apiKey = "apiKey"
REACT_APP_authDomain = "authDomain"
REACT_APP_projectId = "projectId"
REACT_APP_storageBucket = "storageBucket"
REACT_APP_messagingSenderId = "messagingSenderId"
REACT_APP_appId = "appId"

REACT_APP_OPENAI ="Bearer OpenAIAPIKey"
```

### DALL-Eについて
以下のような形で画像生成を利用できます
```
curl --location 'https://api.openai.com/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer APIKey' \
--data '{
    "prompt": "English Word",
    "n": 1,
    "size": "256x256"
}'
```
レスポンスは5秒ほどで返ってきます（本アプリの条件下）
```
{
  "created": UnixTime,
  "data": [
    {
      "url": "ImageUrl"
    }
  ]
}
```

ImageUrlの画像について、生成から1時間ほどでリンク切れになる

## 反省点
- DALL-Eで取得した画像をFirebase Storageに保存しようとしたところ、CORSエラーになり、保存できなかった。→サーバーの勉強が必要
- エラーハンドリングが不十分


### 成果発表で利用したスライド

https://docs.google.com/presentation/d/1kMNadcgf8JEP3iSCMR5CO7vQGofNeZEWpe5XsKcyQcE/edit?usp=sharing

### デモ動画

https://github.com/nepp-tumsat/CameraAIType/assets/83959618/16d0c2ed-ada6-4b99-8ce5-d3e6ac28cb86



