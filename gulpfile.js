var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('default', function() {

	gulp.src(['src/**', '!src/*.js', '!src/styles', '!src/styles/*'])
		.pipe(gulp.dest('build/'));

	gulp.src('src/styles/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./build/'));
		
	gulp.src([
			'bower_components/handlebars/handlebars.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/tabletop/src/tabletop.js',
			'src/*.js'
		])
		.pipe(concat('script.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./build/'));
		
});