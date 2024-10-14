<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu :default-active="activeRoute" router>
                <el-menu-item
                    v-for="route in menuRoutes"
                    :key="route.path"
                    :index="route.name"> <!-- 将路由的path绑定为index属性，点击菜单就能跳转到路由path上了 -->
                        <span>{{ route.meta.title }}</span>
                </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>


<script setup>
import {  ref,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const menuRoutes = ref([]); // 菜单项数据
const activeRoute = ref(''); // 当前激活的路径

// 获取路由表
const router = useRouter();
// 获取当前激活的路由
const route = useRoute();

// 计算需要在菜单项中展示的路由
onMounted(() => { 
  // ref的数据是放在.value属性中，所以修改值时，需要加上.value。 reactive的数据直接修改，不需要用.value
  activeRoute.value = route.path; // 设置当前激活的路径
  //过滤出需要展示的菜单项
  let allMenu = router.options.routes[2].children // routes[2]是主页
  menuRoutes.value = allMenu.filter(  
    (item) => item.meta && item.meta.showMenuEnable
  );
  console.log('menuRoutes:', menuRoutes.value); 
  console.log('activeRoute:', activeRoute.value); 

});


</script>