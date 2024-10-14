<template>
    <div class="login">
        <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="用户名:">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密 码:">
            <el-input v-model="form.pwd" type="password" placeholder="Please input password" show-password/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button type="primary">注册(敬请期待)</el-button>
        </el-form-item>
        </el-form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { useRouter} from 'vue-router'
  const router = useRouter()
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const onSubmit = () => {
    router.push("/index")
  }
  </script>

<style scoped>
/*
水平居中：margin: auto，适用于块级元素，需要父元素设置宽度。
水平垂直居中：使用 position + transform 或 Flexbox 是更现代和简便的做法。

margin: auto 会使浏览器自动计算剩余的水平空间，并将其平均分配到元素的左右两侧。
如果没有设置宽度，元素会默认占据 100% 的父容器宽度，因此不会有多余的空间用于水平居中。
*/
.login {
    width: 20%;   /* 明确宽度 */
    margin: 0 auto;
}

</style>