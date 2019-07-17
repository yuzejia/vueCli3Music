var gulp = require('gulp');
var sequence = require('run-sequence');

gulp.task("copy-common1", function () {
   
})
//清空dist目录
gulp.task("clean", function () {
    console.log('清空 dist 目录下的资源')
    return null
})
//生成生产war包
gulp.task("package", function () {
    // gulp.src(['dist/**']).pipe(zip('dist.war')).pipe(gulp.dest('./'));
    console.info('package ok!');
});
gulp.task('runsequence', function (callback) {
    sequence('clean', 'copy-common1', 'package', callback)
})