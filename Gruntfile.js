module.exports = function (grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      tmp:'.tmp/',
      dist: 'output/'
    },
    svgmin: {
      options: {
        plugins: [
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      ui: {                        // Target
        files: [{                  // Dictionary of files
          expand: true,            // Enable dynamic expansion.
          cwd: 'source',  // Src matches are relative to this path.
          src: ['**/*.svg'],       // Actual pattern(s) to match.
          dest: '.tmp/source', // Destination path prefix.
          ext: '.svg'              // Dest filepaths will have this extension.
          // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
        }]
      }
    },
    webfont: {
      icons: {
        src: '.tmp/source/*.svg',
        destCss: 'output/grunt-webfont/css',
        dest: 'output/grunt-webfont/fonts'
      }
    },
    grunticon: {
      myIcons: {
        files: [
          {
            expand: true,
            cwd: '.tmp/source',
            src: ['*.svg', '*.png'],
            dest: 'output/grunticon'
          }
        ],
        options: {
        }
      }
    },
    'svg-sprites': {
      'ui-separate': {
        options: {
          spriteElementPath: '.tmp/source/',
          spritePath: 'output/svg-sprites/img/',
          cssPath: 'output/svg-sprites/css',
          cssPrefix: 'labs',
          prefix: 'icon',
          sizes: {
            std: 18
          },
          refSize: 17,
          unit: 20
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-dr-svg-sprites');

  grunt.registerTask('default', [
    'clean',
    'svgmin',
    'webfont',
    'grunticon',
    'svg-sprites',
    'clean:tmp'
  ]);
};