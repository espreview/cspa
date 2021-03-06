var gulp = require('gulp'),
  webserver = require('gulp-webserver');

//Webサーバー
gulp.task('webserver', function() {
  gulp.src('sp') //Webサーバーで表示するサイトのルートディレクトリを指定
    .pipe(webserver({
      host:'0.0.0.0',
      livereload: true, //ライブリロードを有効に
      //directoryListing: true //ディレクトリ一覧を表示するか。オプションもあり
    }));
});


/**
 * デフォルトタスク
 *
 * コマンド'gulp'で実行される
 */
gulp.task('default', ['webserver']);