### 打包发布
需手动新建vue.config.js
内容写
```$xslt
module.exports = {
  publicPath: '/'
}
```
### 使用Nginx部署

将打包的文件放到nginx的html文件夹里面
然后修改nginx的配置文件，重启nginx即可访问

####这一行非常关键
 ```$xslt
            try_files $uri $uri/ /index.html last;

```
#### 配置文件如下
```$xslt

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    client_max_body_size 1024m;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       9001;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
        
    location ~ /eduservice/{
        proxy_pass http://localhost:8001;
          
        }
 	location ~ /eduoss/{
      	proxy_pass http://localhost:8002;
          
        }

	location ~ /eduvod/{
      	proxy_pass http://localhost:8003;
          
        }
	location ~ /educms/{
      	proxy_pass http://localhost:8004;
          
        }
	location ~ /edumsm/{
      	proxy_pass http://localhost:8005;
          
        }

	location ~ /educenter/{
      	proxy_pass http://localhost:8150;
          
        }

    location ~ /blogservice/{
      	proxy_pass http://localhost:8801;
          
        }


        location ~/ {
            root   html;
            try_files $uri $uri/ /index.html last;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```





### 修改网站图表 浏览器显示名称
墙裂推荐这个老哥的网站，工具很全呀
https://tool.lu/favicon/

直接将public文件夹里面的图标文件替换即可
名称的话直接修改这个地方

package.json的name 属性 修改为自己取的名称即可

```$xslt
{
  "name": "cilicili",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
```
