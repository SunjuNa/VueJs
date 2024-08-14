const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true, //이거 왜 자동완성 안됨 //저장시 compiler(?)가 움직이게 함
});
