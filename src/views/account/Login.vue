<template>
  <div class="account">
    <div class="form-wrap">
        <a-form
          name="custom-validation"
          ref = "ruleForm"
        >
        <a-form-item >
          <label>用户名</label>
          <a-input type="text" autocomplete="off"> 
          </a-input>
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password">
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block> 
            登录
          </a-button>
        </a-form-item> 

      </a-form>
      <div class="text-center fs-12">
        <router-link to="/forget" class="color-white">忘记密码{{layout.wrapperCol}}</router-link>
        <router-link to="/register" class="color-white">注册</router-link>
      </div>
    </div>
    
  </div>
    
</template>

<script>
// @ is an alias to /src
import {reactive,toRefs,onMounted} from "vue"
export default {
  name: "Login",

  setup(props){
    const formConfig = reactive({
      layout:{
        labelCol:{span:4},
        wrapperCol:{span:14}
      }
    })
    const data = toRefs(formConfig);
    return {
      ...data
    }
  }
};
</script>
<style lang="scss">
@import "style.scss";
</style>