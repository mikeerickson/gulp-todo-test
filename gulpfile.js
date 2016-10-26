var gulp = require('gulp');
var todo = require('gulp-todo');

gulp.task('todo', function () {
    gulp.src('../**/*.js', {
        base: './'
    })
        .pipe(todo({
            reporter: 'table'
        }))
        .pipe(gulp.dest('./'));
});
