TypeScript Webpack Specify "node_modules" Directory Demo
========================================================

从app中引用了week-picker中的react component，通常情况下，在app下运行yarn demo会报以下错误：

```
Uncaught Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

原因是3

为了解决这个问题，需要在app/webpack.config.ts里，设置：

```
resolve: {
  modules: [path.resolve(__dirname, 'node_modules')]
}
```

其作用是告诉webpack只从`app/node_modules`下找依赖，从而避免包含react两次的情况。

另外需要注意：

在typescript+webpack项目中，typescript与webpack各自都有自己的module解析过程，上面的设置仅针对webpack

而typescript在解析week-picker下的代码时，还是需要从`week-picker/node_modules`下寻找module，所以还是需要先在week-picker下运行`npm install`

曾经尝试过在`app/tsconfig.json`下设置`compilerOptions.baseUrl: "./node_modules"`，让typescript只从`app/node_modules`下寻找module，但是遇到了无法成功找到`react`的declaration文件的问题，解决不了，不然就可以让两者都使用`app/node_modules`

```
cd week-picker
npm install

cd app
npm install
npm run demo
```
