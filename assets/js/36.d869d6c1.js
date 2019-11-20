(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{221:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"一、工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、工作原理"}},[t._v("#")]),t._v(" 一、工作原理")]),t._v(" "),a("p",[t._v("当访问http://localhost:3000， 浏览器会向服务器发送请求，包括请求的方法、路径、HTTP协议版本和请求头信息。app会解析请求的路径，调用相应的逻辑，route/index.js中有 "),a("code",[t._v("router.get('/',function(){})")]),t._v("通过"),a("code",[t._v("res.render('index',{title:\"cky\"})")]),t._v("调用视图模板index，传递title变量，最终生成HTML页面，返回给浏览器。\n浏览器收到内容后，通过分析需要获取/stylesheet/style.css，因此会再次向服务器发起请求，app.js并没有一个路由指派到/stylesheets/style.css，但app通过"),a("code",[t._v("app.use(express.static(__dirname+'/public'))")]),t._v("配置了静态文件服务器，因此会定向到app.js所在目录下的/public/stylesheets/style.css拿取这个文件。")]),t._v(" "),a("p",[t._v("这是一个典型的MVC架构，浏览器发送请求，由路由控制接收，根据不同的路径定向到不同的服务器，控制器处理用户具体的请求，可能会访问数据库中的对象，即模型部分，生成视图的HTML，最后再由控制器返回给浏览器，完成一次请求。")]),t._v(" "),a("h3",{attrs:{id:"二、创建路由规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、创建路由规则"}},[t._v("#")]),t._v(" 二、创建路由规则")]),t._v(" "),a("p",[t._v("当我们在浏览器访问http://localhost:3000/cky 的时候，服务器响应头返回404 NOT FOUND的错误，这是因为/cky是一个不存在的路由规则，而且它也不是一个public目录下的文件，所以响应404。\n假设我们创建一个/cky的路由规则")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cky'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cky route"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("即可访问。\n服务器开始监听之前，设置好了所有的路由规则，当请求到来时直接分配到相应的函数，app.get是路由规则创建函数。")]),t._v(" "),a("h3",{attrs:{id:"三、路径匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、路径匹配"}},[t._v("#")]),t._v(" 三、路径匹配")]),t._v(" "),a("p",[t._v("上面讲到了为固定的路径设置路由规则，Express还提供了更高级的路径匹配模式。\n1.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user:'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("访问结果：\n"),a("img",{attrs:{src:"http://i4.tietuku.com/52a6b8b573c8450b.jpg",alt:""}}),t._v("\n路径规则/user/username会自动编译成正则表达式，类似于/user/([^/]+)/?这样的形式，路径参数可以在相应函数中通过req.params的属性访问。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("路径规则同样支持javascript正则表达式，例如"),a("code",[t._v("router.get(\\/user\\/([^\\/]+)\\/?,callback)")]),t._v("这样的好处在于可以定义更加复杂的路径规则，不同之处是配置的参数是匿名的，因此需要通过req.params[0]这样的形式访问。")])]),t._v(" "),a("h3",{attrs:{id:"四、rest风格的路由规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、rest风格的路由规则"}},[t._v("#")]),t._v(" 四、REST风格的路由规则")]),t._v(" "),a("p",[t._v("Express支持REST风格的请求方式，REST意思是表征状态转移，它是一种基于HTTP协议的网络应用的接口风格，充分利用HTTP的方法实现了统一风格的接口服务，HTTP协议定义了以下8个标准方法：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("请求方法")]),t._v(" "),a("th",[t._v("用途")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("GET")]),t._v(" "),a("td",[t._v("请求获取的资源 获取")])]),t._v(" "),a("tr",[a("td",[t._v("POST")]),t._v(" "),a("td",[t._v("向指定资源提交数据 新增")])]),t._v(" "),a("tr",[a("td",[t._v("DELETE")]),t._v(" "),a("td",[t._v("请求服务器删除指定资源 删除")])]),t._v(" "),a("tr",[a("td",[t._v("PUT")]),t._v(" "),a("td",[t._v("请求服务器存储一个资源 更新")])]),t._v(" "),a("tr",[a("td",[t._v("HEAD")]),t._v(" "),a("td",[t._v("请求指定资源的响应头")])]),t._v(" "),a("tr",[a("td",[t._v("TRACE")]),t._v(" "),a("td",[t._v("回显服务器数到的请求，主要用户测试或诊断")])]),t._v(" "),a("tr",[a("td",[t._v("CONNECT")]),t._v(" "),a("td",[t._v("HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。")])]),t._v(" "),a("tr",[a("td",[t._v("OPTIONS")]),t._v(" "),a("td",[t._v("返回服务器支持HTTP请求方法")])])])]),t._v(" "),a("p",[t._v("Express对每种HTTP请求方法都设计了不同的路由绑定函数")]),t._v(" "),a("ul",[a("li",[t._v("GET : app.get(path,callback);")]),t._v(" "),a("li",[t._v("POST: app.post(path,callback);")]),t._v(" "),a("li",[t._v("PUT : app.put(path,callback);")]),t._v(" "),a("li",[t._v("DELETE: app.delete(path,callback);\n...\n...\n所有方法 app.all(path,callback);\napp.all函数，它支持把所有的请求方法绑定到同一个相应函数，是一个非常灵活的函数。")])]),t._v(" "),a("h3",{attrs:{id:"五、控制权转移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、控制权转移"}},[t._v("#")]),t._v(" 五、控制权转移")]),t._v(" "),a("p",[t._v("Express支持同一路径绑定多个响应函数")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test/:user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all method is call"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/test/:user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("但是我们访问都只会返回一次。\nExpress提供了路由控制权转移的方法，即next()函数，通过调用则将控制权交给后面的规则")])])}),[],!1,null,null,null);s.default=e.exports}}]);