### 実行したコマンド

- $ npm init -y
  - package.jsonの作成
- $ npm i -D gulp gulp-sass gulp-pug
  - gulp, scss, pugのインストール
- $ npm i -D css-mqpacker gulp-postcss autoprefixer css-declaration-sorter
- $ npm i gulp-postcss@9.0.0 postcss -D
- $ touch gulpfile.js
  -  gulpfile.jsファイル作成（gulpディレクトリの中に作成）
- $ npx gulp

- $ npx http-server
  - ローカルサーバーの立ち上げ

- $ git checkout
  - ブランチの切り替え

  
### node.jsのダウングレード方法
 - n ls-remote --all
 - sudo n <任意のバージョン>


### yarnで構築する

- yarn global add gulp-cli
  - インストールしていなかった場合に実行
  
- -yarn add gulp --dev
  - gulpをインストール
  - yarn add gulp-gulp-rename
  - yarn add gulp-gulp-rename
  - yarn add gulp-image-resize
  - yarn add gulp-imagemin@7.1.0 --dev
    - 最新版はエラーになるのでバージョンを落としてインストール
（多分require関数を使わないでimportを使う、そしてpackage.jsonにtype:”module”の記述をする）
    


- touch gulpfile.js
  - gulpfile.jsファイルを作成

gulpfile.jsは gulp <関数名> で実行する

