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
            dest: "output/grunticon"
          }
        ],
        options: {
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask("default", [
    'clean',
    'svgmin',
    'webfont',
    'grunticon',
    'clean:tmp'
  ]);
};