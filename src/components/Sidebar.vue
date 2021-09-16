<template>
    <el-menu
            router
            :collapse="isCollapse"
            :uniqueOpened="true"
            default-active="2"
            class="sidebar"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
    >

        <el-menu-item index="/cases">
            <i class="el-icon-s-order"></i>
            <template #title>测试用例</template>
        </el-menu-item>

        <el-menu-item index="/requests">
            <i class="el-icon-s-platform"></i>
            <template #title>SDK接口</template>
        </el-menu-item>


        <el-menu-item index="/plans">
            <i class="el-icon-s-cooperation"></i>
            <template #title>测试计划</template>
        </el-menu-item>

        <el-menu-item index="/reports">
            <i class="el-icon-s-data"></i>
            <template #title>测试报告</template>
        </el-menu-item>

        <el-menu-item @click="switch_side">
            <i  v-if="isCollapse==false" class="el-icon-caret-left"></i>
            <i v-else  class="el-icon-caret-right"></i>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import {ref,defineComponent} from 'vue';

    export default defineComponent({
        setup() {
            let isCollapse=ref(true)
            function switch_side() {
                isCollapse.value=!isCollapse.value
            }

            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            };
            const handleClose = (key, keyPath) => {
                console.log(key, keyPath);
            };
            return {
                handleOpen,
                handleClose,
                isCollapse,
                switch_side
            };
        },
    });
</script>

<style>
.sidebar{
    height:100vh;
}
</style>
