## 开启Apache的Gzip压缩
 >要让 Apache 支持 Gzip 功能，需要用到 deflate_Module 和 headers_Module。打开 Apache 的配置文件httpd.conf，大约105行左右，找到以下两行内容：（这两行不是连在一起的）
```
 #LoadModule deflate_module modules/mod_deflate.so
 #LoadModule headers_module modules/mod_headers.so
 ```
>然后其前面的"#"注释删掉 表示开启gzip压缩功能。开启后还需要进行相关配置。在httpd.conf文件的最后添加以下内容即可
```
<IFModule deflate_module>
    #必须的，就像一个开关一样，告诉Apache对浏览器的内容进行压缩
    SetOutputFilter DEFLATE
    DeflateCompressionLevel 9
</IFModule>
```
>最少需要加上以上内容，才能使gzip功能生效。由于没有做其他的额外配置，所以其他相关的配置均使用Apache默认设置。这里说一下参数 "DeflateCompressionLevel",它表示压缩级别，值从1到9，值越大表示压缩越厉害。