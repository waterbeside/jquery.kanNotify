module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        "jshintrc":true
      },
      all: [
        'statics/*.js'
      ],
    },
    uglify: {
      options: {
        stripBanner: true,
        banner: [
          '/*!',
          ' <%= pkg.name %>.js v<%= pkg.version %> | <%= pkg.homepage %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
          ' Copyright (c) <%= pkg.author %>',
          '*/\n'
        ].join('\n'),
      },
      build: {
        src: 'statics/jquery.kanNotify.js',
        dest: 'build/jquery.kanNotify.min.js'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: false,
          outputSourceFiles: true,
          compress: true,
          yuicompress: false,
        },
        files: {
          'build/kanNotify.css': 'statics/kanNotify.less',
        }
      },
    },

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['jshint', 'uglify','less']);
}
