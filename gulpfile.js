var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
//起服务
gulp.task('server', function () {
	return gulp.src('./src/')
		.pipe(server({
			port: 8080,
			open: true,
			livereload: true,
			proxies: [{
				source: '/api/find',
				target: 'http://localhost:3000/api/find'
			}]
		}))
})
//编译sass
gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/css'))
})
//监听
gulp.task('watch', function () {
	return gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
})
//
gulp.task('default', gulp.parallel('sass', 'server', 'watch'));