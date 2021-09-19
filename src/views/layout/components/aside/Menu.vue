<template>
 <a-sub-menu :key="menu.path">
        <template #title>
            <span >{{menu.meta && menu.meta.title}}</span>
        </template>
        <template v-if="menu.children.length">
            <!-- 不存在子级目录 -->
            <template v-for="item in menu.children" >
                <a-menu-item v-if="!item.children" :key="item.path">
                    <router-link :to="item.path">{{item.meta && item.meta.title}}</router-link>
                </a-menu-item>
                <!-- 存在子级目录 -->
                <Menu v-else :menu="item"></Menu>
            </template>
        </template>
 </a-sub-menu>
</template>
<script>
export default {
    name:'Menu',
    props:{
        menu:{
            type:Object,
            default: ()=>({})
        }
    }

}
</script>
<style scoped>

</style>