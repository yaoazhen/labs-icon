module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'output/'
    },
    webfont: {
      icons: {
        src: 'source/*.svg',
        destCss: 'output/grunt-webfont/css',
        dest: 'output/grunt-webfont/fonts'
      }
    },
    grunticon: {
      myIcons: {
        files: [
          {
            expand: true,
            cwd: 'source',
            src: ['*.svg', '*.png'],
            dest: "output/grunticon"
          }
        ],
        options: {
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", [
    'clean',
    'webfont',
    'grunticon'
  ]);
};