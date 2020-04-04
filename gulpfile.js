'use strict'

let sass = require("gulp-sass");

gulp.task("scss", function() {
    gulp.src("sourse-files")
        .pipe(sass())
        .pipe(gulp.dest("destination"))
})

