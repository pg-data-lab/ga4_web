# ga4_web

### このアプリについて
```
GA4環境構築に関する問い合わせフォーム
デプロイ先：firebase
```

### 環境構築
```
#Vue CLIのインストール(vueが入っていなければ)
$ npm install -g @vue/cli 5.0.4

#パッケージのインストール
$ npm install
```

### ローカルサーバーの立ち上げ
```
npm run serve

```
### Firebaseにデプロイ
```
#ビルド
npm run build

#デプロイ(project@でfirebaseにログインした後)
firebase deploy
```
## メモ
```
バックエンドの処理は.envのurlのGASで行う
チャットワークへの通知・シート更新用GAS：VUE_APP_URL_ON_SHEET
メール送信用GAS：VUE_APP_URL_ON_GAS

GASを更新したあとは.envのURLをデプロイした後のGASのurlに更新する

```


