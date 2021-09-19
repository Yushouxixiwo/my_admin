<template>
    <a-layout id="layout-main">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <LayoutAside />
        </a-layout-sider>
        <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
        <LayoutHeader />
        </a-layout-header>
        <a-layout-content
            :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
            <LayoutMain />
        </a-layout-content>
        </a-layout>
    </a-layout>
    <!-- <LayoutHeader />
    <LayoutMain />
    <LayoutAside /> -->
    
</template>
<script>
import LayoutAside from './components/Aside';
import LayoutHeader from './components/Header';
import LayoutMain from './components/Main';
export default {
    data() {
    return {
        collapsed: false,
        };
    },
    name:'Layout',
    components:{ LayoutAside , LayoutHeader,LayoutMain}
}
</script>
<style land="scss">
#layout-main{
    height:100vh
}
</style>