import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

import config from '../config';

gulp.task('image:dev', () => {
	return gulp.src(config.path.image.files)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dev.image))
		.on('error', config.handleError);
});

gulp.task('image:dist', () => {
	return gulp.src(config.path.image.files)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dev.image))
		.on('error', config.handleError);
});
