module.exports = {
  apps: [
    {
      name: 'API',
      script: 'app.js',
      args: 'one two',
      instances: 1, //应用启动实例个数，仅在cluster模式有效，默认为fork；
      autorestart: true, //默认为true, 发生异常的情况下自动重启；
      watch: false, // 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
      max_memory_restart: '1G', //最大内存限制数，超出自动重启；
      env: {
        // 环境变量
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  //   deploy: {
  //     production: {
  //       user: 'node',
  //       host: '212.83.163.1',
  //       ref: 'origin/master',
  //       repo: 'git@github.com:repo.git',
  //       path: '/var/www/production',
  //       'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     },
  //   },
};

/* 
  . 常用配置项说明:
apps： json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用；

name：应用程序名称；

cwd：应用程序所在的目录；

script：应用程序的脚本路径；

log_date_format： 指定日志日期格式，如YYYY-MM-DD HH：mm：ss；

error_file：自定义应用程序的错误日志文件，代码错误可在此文件查找；

out_file：自定义应用程序日志文件，如应用打印大量的标准输出，会导致pm2日志过大；

pid_file：自定义应用程序的pid文件；

interpreter：指定的脚本解释器；

interpreter_args：传递给解释器的参数；

instances： 应用启动实例个数，仅在cluster模式有效，默认为fork；

min_uptime：最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量；

max_restarts：设置应用程序异常退出重启的次数，默认15次（从0开始计数）；

autorestart ：默认为true, 发生异常的情况下自动重启；

cron_restart：定时启动，解决重启能解决的问题；

max_memory_restart：最大内存限制数，超出自动重启；

watch：是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。

ignore_watch：忽略监听的文件夹，支持正则表达式；

merge_logs： 设置追加日志而不是新建日志；

exec_interpreter：应用程序的脚本类型，默认是nodejs；

exec_mode：应用程序启动模式，支持fork和cluster模式，默认是fork；

autorestart：启用/禁用应用程序崩溃或退出时自动重启；

vizion：启用/禁用vizion特性(版本控制)；

env：环境变量，object类型；

force：默认false，如果true，可以重复启动一个脚本。pm2不建议这么做；

restart_delay：异常重启情况下，延时重启时间；
  */
