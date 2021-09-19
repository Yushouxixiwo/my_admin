<template>
    <div id="header">
        <a-menu
            :openKeys="data.openKeys"
            :selectedKeys="data.selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
            @click="selectMenu"
            @openChange="openMenu"
        >
        <template v-for="item in routers" >
            <template v-if="!item.hidden">
             <!-- 这里是一级 -->
                <a-menu-item v-if="!item.children" :key="item.path">
                    <router-link :to="item.path">{{item.meta && item.meta.title}}</router-link>
                </a-menu-item>
                <!-- 这里是子级 -->
            <Menu v-else :menu="item" :key="item.path"></Menu>
            </template>
        </template>
        </a-menu>
    </div>
</template>
<script>
import {reactive} from 'vue';
import {useRouter, useRoute} from 'vue-router'
import Menu from './Menu'
export default {
    name:'Aside',
    components:{
        Menu
    },
    setup(){
        const {options} = useRouter();
        const routers = options.routes;
        const data = reactive({
            selectedKeys:[],
            openKeys:[],
            abc:11
        })
        const selectMenu = ({item,key,keyPath})=>{
            // console.log(item)
            // console.log(key)
            // console.log(keyPath)
            data.selectedKeys = keyPath;
            console.log(keyPath)
            localStorage.setItem("selectedKeys",keyPath)//设置本地存储
        }
        const openMenu = (openKeys)=>{
        console.log(openKeys)
        }
        console.log(data.routers)
        return{
            data,
            routers,
            selectMenu,
            openMenu
        }

    },


}
</script>
<style scoped>

</style>