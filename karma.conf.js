module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    autoWatch : true,

    frameworks: ['mocha','chai', 'sinon', 'chai-sinon'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-chai',
      'karma-chai-sinon',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-sinon'
            ],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/view1/**/!(*_test)+(.js)': 'coverage',
      'app/view2/**/!(*_test)+(.js)': 'coverage',
      'app/components/**/!(*_test)+(.js)': 'coverage'
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'reports/coverage/'
    }

  });
};
