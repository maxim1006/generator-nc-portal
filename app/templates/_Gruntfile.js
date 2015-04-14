module.exports = function(grunt) {

    grunt.initConfig({

        // Настройка плагина less
        less: {
            development: {
                files: {
                    'css/custom.css': 'less/custom.less'
                }
            }
        },
        // Настройка плагина soy-compile
        soycompile: {
            mytask: {
                expand: true,
                cwd: 'templates/com/netcracker/portal',
                //для всех соек
                src: ["**/**/*.soy"],
                //для одной сойки
                //src: ["portlets/lineups/lineups.soy"],
                dest: "js",
                options: {
                    jarPath: "templates/",
                    ext: ".soy.js"
                }
            }
        },
        // Настройка плагина watch
        watch: {
            styles: {
                files: 'less/**/**/**/*.less',
                tasks: 'less',
                options: {
                    spawn: false
                }
            },
            templates: {
                files: 'templates/**/**/**/**/*.soy',
                tasks: 'soycompile',
                options: {
                    spawn: true
                }
            }
        }

    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-soy-compile');

    // Задача по умолчанию
    grunt.registerTask('default', ['watch']);
};
