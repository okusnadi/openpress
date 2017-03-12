const gulp = require("gulp");

// Babel for transpilation
const babel = require("gulp-babel");

// ESLint for linting
const eslint = require("gulp-eslint");

// Watch for watching changes
const watch = require('gulp-watch');

// Source and Distribute folder names (We keep it here to be able to change it any time).
const distFolder = "dist";
const srcFolder = "src";

// Default task runs the watch.
gulp.task("default", ["watch"], function() {});

// Build in production mode
gulp.task("build", ["transpile"]);

// Build in development mode
gulp.task("build-dev", ["lint", "transpile"]);

// Watch
gulp.task("watch", function() {
  watch(["**/*.js", "!node_modules/**", `!${distFolder}/**`], function(
    events, done) {

    // Running build-dev task for building in development mode.
    gulp.start("build-dev", done);

  });
})

// Babel Transpile
gulp.task("transpile", function() {
  return gulp.src(["**/*.js", "!node_modules/**", `!${distFolder}/**`])
    .pipe(babel())
    .pipe(gulp.dest(distFolder));
});

// ESLint Lint
gulp.task("lint", () => {
  return gulp.src(["**/*.js", "!node_modules/**", `!${distFolder}/**`])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
