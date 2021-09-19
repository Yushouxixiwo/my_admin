<template>
    <div id="header">
        <div class="header-menu">
        <a-dropdown>
            <a class="ant-dropdown-link" @click="e=>e.preventDefault()">
                <img src="../../../assets/image/face.png"/>
            </a>
            <template #overlay>
            <a-menu >
                <a-menu-item key="1">
                    <div class="menu-item">15919700271</div>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="2"> 
                    <div class="menu-item">
                        <span>中文</span>
                        <span>英文</span>
                    </div>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">
                    <div class="menu-item">退出</div>
                </a-menu-item>
            </a-menu>
            </template>
        <a-button style="margin-left: 8px"> Button <a-icon type="down" /> </a-button>
        </a-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    name:'Aside'
}
</script>
<style lang='scss'>
#header{
    padding:0 20px;
    height:64px;
}
.header-menu{
    float: right;
    margin-top:15px;
    .menu-item {
        padding: 5px 10px;
        font-size: 14px;
        font-family:'黑体';
    }
}

</style>