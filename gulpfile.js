/* eslint-disable no-undef */
"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    merge = require("merge-stream"),
    del = require("del"),
    bundleconfig = require("./bundleconfig.json");

var regex = {
    css: /\.css$/,
    js: /\.js$/,
};

function getBundles(regexPattern) {
    return bundleconfig.filter(function (bundle) {
        return regexPattern.test(bundle.outputFileName);
    });
}

function clean() {
    var files = bundleconfig.map(function (bundle) {
        return bundle.outputFileName;
    });

    return del(files);
}
gulp.task(clean);

function minJs() {
    var tasks = getBundles(regex.js).map(function (bundle) {
        return gulp
            .src(bundle.inputFiles, { base: "." })
            .pipe(concat(bundle.outputFileName))
            .pipe(uglify())
            .pipe(gulp.dest("."));
    });
    return merge(tasks);
}
gulp.task(minJs);

function minCss() {
    var tasks = getBundles(regex.css).map(function (bundle) {
        return gulp
            .src(bundle.inputFiles, { base: "." })
            .pipe(concat(bundle.outputFileName))
            .pipe(cssmin({ keepSpecialComments: 0 }))
            .pipe(gulp.dest("."));
    });
    return merge(tasks);
}
gulp.task(minCss);

const watch = function () {
    // gulp.watch(
    //   getBundles(regex.css).map((item) => item.inputFiles.toString()),
    //   minCss
    // );
    // gulp.watch(
    //   getBundles(regex.js).map((item) => item.inputFiles.toString()),
    //   minJs
    // );
    gulp.watch("assets/css/style.css", minCss);
    gulp.watch("assets/js/script.js", minJs);
};

gulp.task("min", gulp.series(clean, minJs, minCss, watch));
