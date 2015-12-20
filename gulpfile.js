var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('default', ['build'], function() {
	
	watch('src/**', function (events, done) {
		gulp.start('build');
    });
	
});

gulp.task('build', function() {

	gulp.src(['src/**', '!src/*.js', '!src/styles', '!src/styles/*'])
		.pipe(gulp.dest('build/'));

	gulp.src('src/styles/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./build/'));
		
	gulp.src([
			'bower_components/handlebars/handlebars.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/tabletop/src/tabletop.js',
			'bower_components/masonry/dist/masonry.pkgd.js',
			'src/*.js'
		])
		.pipe(concat('script.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('./build/'));
		
});