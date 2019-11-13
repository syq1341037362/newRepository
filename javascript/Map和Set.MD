# Map 和 Set

> Map是一组键值对的结构，具有极快的查找速度。初始化Map需要一个二维数组，或者直接初始化一个空Map
```
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```
> 由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
```
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

## Map方法

### set("key","value") 赋值
```
var map = new Map();
map.set("key","value")
```
---

### get("key")  返回键对应的值，如果不存在，则返回undefined。
```
var map = new Map();
map.get("key")
```
---

### has("key") 判断是否有值
```
var map = new Map([["bar","1"]]);
map.has("bar") //true
```
---

### delete("key") 移除任何与键相关联的值，并且返回该值
```
var map = new Map([["bar","1"]]);
map.delete("bar") 

```
---

### clear 清除所有键值对
```
var map = new Map([["bar","1"]]);
map.clear();
console.log(map);
```
---
### forEach 遍历 Map的回调函数参数依次为value、key和map本身
```
var map = new Map([["小明","1"],["小红","2"]]);
map.forEach(function(value,key,map){
    console.log('value='+value+',key='+key+',map='+map)
})
```
---

### for of 遍历map
```
var map = new Map([["小明","1"],["小红","2"]]);
for(var i of map){
     console.log(i);
    console.log(i[0]);
}
```
---

### keys() 返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键,Iterator对象可以用next()获取下一个值;
```
var map = new Map([["小明","1"],["小红","2"]];
map.keys(); 
```


## Set 
> Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key,要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set
```
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
```
---
> 重复元素在Set中自动被过滤：注意数字3和字符串'3'是不同的元素。
```
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

### add(Key)  add(Key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
```
s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);
s; // 仍然是 Set {1, 2, 3, 4}
```
---
### delete(Key) 删除元素：
```
var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
```