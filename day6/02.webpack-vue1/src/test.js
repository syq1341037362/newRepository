//这是 Node 中向外暴露成员的形式
//module.exports={}


//在ES6中，也通过规范的形式 规定了ES6中如何 导入 和 导出 模块
//ES6 中导入模块 使用 import 模块名称 from '模块标识符'
//导入css import '标识路径'
//在ES6中使用 export default 和 export 向外暴露成员
var info = {
    name: 'zs',
    age: 20
}

export default info

// export default {
//     address: '北京'
// }
//注意export default 向外暴露的成员可以使用任意变量来接收
//注意 在一个模块中 export default 只允许向外暴露一次 
//注意 在一个模块中  可以同时使用 export default 和 export 向外暴露成员

export var title = '小星星'
export var content = '哈哈哈'

//注意：使用 export 向外暴露的成员 只能用 { } 的形式来接收 这种形式 叫做 [按需导出]
//注意 export 可以向外暴露多个成员 同时 如果某些成员 我们在 import 的时候 不需要 则可以不在 { } 中定义
//注意  使用 export 导出的成员 必须严格按照 导出时候的名称 来使用 { } 按需接收
//注意 使用 export 导出的成员 如果 就想 换个名称来接收  可以用 as 起别名

//在Node中使用 var 名称 = require('模块标识符')
//module.export 和 exports 来暴露成员