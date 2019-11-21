(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{213:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"搭建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建项目"}},[t._v("#")]),t._v(" 搭建项目")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g @angular"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\nng "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("my")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("app\n")])])]),s("h2",{attrs:{id:"module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" module")]),t._v(" "),s("p",[t._v("NgModules 用于配置注入器和编译器，并帮你把那些相关的东西组织在一起。")]),t._v(" "),s("p",[t._v("NgModule 的元数据会做这些：")]),t._v(" "),s("p",[t._v("声明某些组件、指令和管道属于这个模块。\n公开其中的部分组件、指令和管道，以便其它模块中的组件模板中可以使用它们。\n导入其它带有组件、指令和管道的模块，这些模块中的元件都是本模块所需的。\n提供一些供应用中的其它组件使用的服务。\n用于规定哪些组件和指令属于它（declarations），以及它使用了哪些其它模块（imports）")]),t._v(" "),s("h2",{attrs:{id:"依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[t._v("#")]),t._v(" 依赖注入")]),t._v(" "),s("p",[t._v("我们在组件中不应该关心数据是怎样获取的，数据要放在服务里面，组件可以通过依赖注入的方式来获取服务中的数据。")]),t._v(" "),s("p",[t._v("在组件中的constructor的参数里，注入需要的服务。")]),t._v(" "),s("p",[t._v("服务的声明要在service里面用Injectable装饰器去声明一个类为服务；providedIn是元数据，也就是给谁用，声明在哪个模块上面，默认是root，即在app.module")]),t._v(" "),s("h2",{attrs:{id:"路由与导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由与导航"}},[t._v("#")]),t._v(" 路由与导航")]),t._v(" "),s("p",[t._v("路由：用 RouterModule.forRoot() 方法来配置路由器， 并把它的返回值添加到 AppModule 的 imports 数组中。")]),t._v(" "),s("p",[t._v("RouterOutlet 是一个来自路由模块中的指令，它的用法类似于组件。 它扮演一个占位符的角色，用于在模板中标出一个位置，路由器将会把要显示在这个出口处的组件显示在这里。类似router-view")]),t._v(" "),s("p",[t._v("根模块中使用forRoot()，子模块中使用forChild()")]),t._v(" "),s("p",[t._v("导航：router-link")]),t._v(" "),s("h2",{attrs:{id:"懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),s("p",[t._v("定义：即用到的时候才会加载 路由里面的component变成loadChildren，后面加上模块的位置")]),t._v(" "),s("p",[t._v("PreloadAllModules 的意思是：预加载所有模块，不管有没有被访问到。也就是说，要么就一次预加载所有异步模块，要么就彻底不做预加载。")]),t._v(" "),s("p",[t._v("熟悉angular的状态管理（跟服务相关）\n服务的声明要在service里面用Injectable装饰器去声明一个类为服务；providedIn是元数据，也就是给谁用，一般元数据声明是root，即在app.module")]),t._v(" "),s("p",[t._v("也可以在模块（module.ts）的providers里面引入服务，服务的元数据就是当前的模块")]),t._v(" "),s("p",[t._v("也可以在组件component.ts的providers里面引入服务，服务的元数据就是当前的模块")]),t._v(" "),s("p",[t._v("了解rxjs的使用，对比promise\n共同点：Promise 里面用的是 then() 和 resolve()，而 RxJS 里面用的是 subscribe() 和 next() 。")]),t._v(" "),s("p",[t._v("不同点： rxjs可以中途取消--可以通过 unsbscribe() 方法中途撤回；")]),t._v(" "),s("p",[t._v("可以发射多个值--next可以被调用多次，而resolve只能调用一次")]),t._v(" "),s("p",[t._v("有各种工具函数--filter、map")]),t._v(" "),s("p",[t._v("了解httpClient,对比axios\n不同：httpClient返回的是rxjs对象，axios返回的是promise对象，httpClient可以当做一个服务注入到组件或者service里面。")]),t._v(" "),s("p",[t._v("共同：都提供get、post这一类的方法，都有拦截器，用来添加公共的配置和参数")]),t._v(" "),s("h2",{attrs:{id:"如何使用服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用服务端渲染"}},[t._v("#")]),t._v(" 如何使用服务端渲染")])])}),[],!1,null,null,null);e.default=a.exports}}]);