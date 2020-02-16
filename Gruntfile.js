/**
 * CSS Grid Blog Homepage Example
 * 
 * An example of a homepage for a blog site which was
 * designed using CSS Grid
 */
const sass = require('node-sass')
const siteDirectory = '_public/'

/**
 * Configure grunt
 * 
 * @param grunt grunt instance
 */
module.exports = function configGrunt(grunt) {
    // Configure grunt
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            public: {
                files: [{
                    expand: true, 
                    cwd: 'js', 
                    src: ['**/*.js'], 
                    dest: siteDirectory
                }]
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            public: {
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['main.scss'],
                    dest: siteDirectory,
                    ext: '.css'
                }]
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'html',
                    src: '**/*.html',
                    dest: siteDirectory
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            babel: {
                files: ['js/**/*.js'],
                tasks: ['babel']
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['html/**/*.html'],
                tasks: ['copy']
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    base: siteDirectory,
                    livereload: true,
                    open: true
                }
            }
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-copy')

    // Register tasks
    grunt.registerTask('build', ['babel', 'sass', 'copy'])
    grunt.registerTask('devserver', ['build', 'connect', 'watch'])
    grunt.registerTask('default', ['build'])
}