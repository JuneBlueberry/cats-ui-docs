### 安装

### CDN 引入
通过 github 可以获取 junui 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用。

``` html
<!-- import Vue.js -->
<script src="vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="junui.min.css">
<!-- import iView -->
<script src="junui.min.js"></script>
```

<br/>

> 示例

``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>junui example</title>
    <link rel="stylesheet" type="text/css" href="junui.min.css">
    <script type="text/javascript" src="vue.min.js"></script>
    <script type="text/javascript" src="junui.min.js"></script>
</head>
<body>
<div id="app">
  <h1>{{msg}}</h1>
  <jun-button>click me</jun-button>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            msg: 'hello junui'
        },
    })
  </script>
</body>
</html>
```

### NPM 安装

推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。

```
$ npm install junui --save
```

如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读下一章。