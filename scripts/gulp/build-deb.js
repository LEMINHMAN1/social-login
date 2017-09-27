var path = require('path');
var gulp = require('gulp');
var deb = require('gulp-debian');
var log = require('gulp-util').log;
var argv = require('yargs').argv;
var config = require('./../config');
var _ = require('lodash');

gulp.task('build-deb', () => {
    var version = argv.version;
    log(`building debian package, version: ${version}`);
    var debianConfig = _.defaults({version: version}, config.debianConfig);	
    return gulp.src(path.join(debianConfig._target,'*')).pipe(deb(debianConfig));
})
