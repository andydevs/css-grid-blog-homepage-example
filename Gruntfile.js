/**
 * CSS Grid Blog Homepage Example
 * 
 * An example of a homepage for a blog site which was
 * designed using CSS Grid
 */
const sass = require('node-sass')
const siteDirectory = 'public/'

/**
 * Configure grunt
 * 
 * @param grunt grunt instance
 */
module.exports = function configGrunt(grunt) {
    // Configure grunt
    grunt.initConfig({
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
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: './node_modules/@fortawesome/fontawesome-free/webfonts',
                    src: '*',
                    dest: siteDirectory + '/fonts'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['html/**/*.html'],
                tasks: ['copy:html']
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
        },
        'gh-pages': {
            options: {
                base: siteDirectory
            },
            src: ['**/*']
        }
    })

    // Load tasks
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-gh-pages')

    // Register tasks
    grunt.registerTask('build', ['sass', 'copy'])
    grunt.registerTask('devserver', ['build', 'connect', 'watch'])
    grunt.registerTask('deploy', ['build', 'gh-pages'])
    grunt.registerTask('default', ['build'])
}