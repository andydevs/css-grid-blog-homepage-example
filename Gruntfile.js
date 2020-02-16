/**
 * CSS Grid Blog Homepage Example
 * 
 * An example of a homepage for a blog site which was
 * designed using CSS Grid
 */
const sass = require('node-sass')

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
                    dest: 'public/'
                }]
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                src: ['scss/main.scss'],
                dest: 'public/main.css'
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
                files: ['public/**/*.html'],
                tasks: []
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    base: 'public',
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

    // Register tasks
    grunt.registerTask('build', ['babel', 'sass'])
    grunt.registerTask('devserver', ['build', 'connect', 'watch'])
    grunt.registerTask('default', ['build'])
}