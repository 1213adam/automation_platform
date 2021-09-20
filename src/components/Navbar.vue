<template>
    <div>
        <div class="logo">
            <i class="el-icon-s-platform" ></i>

            <span style="color:white">测试平台开发 </span>
        </div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
        >
            <!-- <el-menu-item index="1">处理中心</el-menu-item>
            <el-sub-menu index="2">
              <template #title>我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item> -->
            <el-menu-item id="avatar">
                <el-dropdown>
                    <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-turn-off" divided @click="quit">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
 
import {logout} from '../httplib'
    export default {
        setup() {
            function quit() {
                
                logout()
            }
            return {
                circleUrl:
                    "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                    quit
            };
        },
    };
</script>

<style scoped>
    .logo {
        width: 200px;
        background-color: rgba(48,60,84);
        float: left;
        
    }

    .avatar {
        float: right;
        text-align: center;
    }
  
</style>
