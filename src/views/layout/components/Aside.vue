<template>
    <div id="header">
        <a-menu
            :openKeys="data.openKeys"
            :selectedKeys="data.selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
        >
        <template v-for="item in routers" >
            <template v-if="!item.hidden">
             <!-- 这里是一级 -->
                <a-menu-item v-if="!item.children" :key="item.path">{{item.meta && item.meta.title}}</a-menu-item>
                <!-- 这里是子级 -->
                <a-sub-menu v-else :key="item.path">
                    <template #title>
                    <span slot="title"><a-icon type="appstore"/><span>管理总台</span></span>
                    </template>
                    <template v-if="item.children.length">
                        <a-menu-item :key="child.path" v-for="child in item.children">
                            {{child.meta && child.meta.title}}
                        </a-menu-item>
                    </template>
                </a-sub-menu>
            </template>
        </template>
       
    

        </a-menu>
    </div>
</template>
<script>
import {reactive} from 'vue';
import {useRouter, useRoute} from 'vue-router'
export default {
    name:'Aside',
    setup(){
        const {options} = useRouter();
        const routers = options.routes;
        const data = reactive({
            selectedKeys:['2'],
            openKeys:['/role']
        })
        console.log(data.routers)
        return{
            data,
            routers
        }
    }

}
</script>
<style scoped>

</style>