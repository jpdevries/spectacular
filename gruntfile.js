module.exports = function(grunt) {
    grunt.option.init({
        'ver': (!grunt.option('ver')) ? grunt.file.readJSON('package.json').version : grunt.option('ver'),
        'rel': (!grunt.option('rel')) ? grunt.file.readJSON('package.json').release : grunt.option('rel')
    });
    var initConfig = {
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            'lib': './lib/',
            'scss': './app/assets/stylesheets/',
            'app': './app/',
            'assets': './assets/',
            'css': './css/',
            'styleguide': './docs/',
            'kssassets': './kss-assets/'
        },
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byComponent'
                }
            }
        },
        copy: { /* move files */
            misc: {
                files: [{
                    src: 'bourbon/**/*',
                    cwd: '<%= dirs.lib %>',
                    dest: '<%= dirs.scss %>',
                    expand: true
                }, {
                    src: 'neat/**/*',
                    cwd: '<%= dirs.lib %>',
                    dest: '<%= dirs.scss %>',
                    expand: true
                }]
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: false,
                    loadPath: [
                      '<%= dirs.scss %>spec/_tacular.scss'
                    ]
                    //banner: '/*!' + '\n* <%= pkg.title %> - v<%= pkg.version %> %>' + '\n* Copyright (C) <%= grunt.template.today("yyyy") %> modmore' + '\n*/'
                },
                files: {
                    '<%= dirs.assets %><%= dirs.css %>spectacular-<%= pkg.version %>.css': '<%= dirs.scss %>main.scss',
                    '<%= dirs.styleguide %><%= dirs.kssassets %>css/spectacular.css': '<%= dirs.scss %>spectacular.scss'
                }
            }
        },
        cssmin: {
            options: {
              report: 'gzip'
            },
            ship: {
                files: {
                    '<%= dirs.assets %><%= dirs.css %>spectacular-<%= pkg.version %>.min.css': '<%= dirs.assets %><%= dirs.css %>spectacular-<%= pkg.version %>.css'
                }
            }
        },
        watch: { /* trigger tasks on save */
            options: {
                livereload: true
            },
            html: {
                options: {
                    livereload: 35729
                },
                files: ['./*.html', '<%= dirs.scss %>spec/homepage.md'],
                tasks: ['sass:dev', 'exec:kss']
            },
            scss: {
                options: {
                    livereload: 35729
                },
                files: '<%= dirs.scss %>**/*.scss',
                tasks: ['sass:dev', 'exec:kss']
            }
        },
        exec: {
          kss: 'npm run kss',
          gzip: 'gzip -c <%= dirs.assets %><%= dirs.css %>spectacular-<%= pkg.version %>.min.css | wc -c'
        },
        growl: { /* optional growl notifications requires terminal-notifer: gem install terminal-notifier */
            sass: {
                message: "Sass files created.",
                title: "grunt"
            },
            build: {
                title: "grunt",
                message: "Build complete."
            },
            watch: {
                title: "grunt",
                message: "Watching. Grunt has its eye on you."
            },
            concat: {
                title: "grunt",
                message: "JavaScript concatenated."
            },
            uglify: {
                title: "grunt",
                message: "JavaScript minified."
            }
        },
        clean: { /* take out the trash */
            postbuild: ['<%= dirs.lib %>']
        }
    };

    grunt.initConfig(initConfig);

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-growl');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['growl:watch', 'watch']);
    grunt.registerTask('build', ['bower', 'copy', 'sass:dev', 'cssmin']);
};
