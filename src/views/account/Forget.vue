<template>
  <div class="account">
    <div class="form-wrap">
        <a-form
          name="custom-validation"
          ref = "ruleForm"
          :model="account_form"
          @finish="handleFinish"
          :rules="rules_form"
        >
        <a-form-item >
          <label>用户名</label>
          <a-input v-model="account_form.username" type="text" autocomplete="off"> 
          </a-input>
        </a-form-item>

        <a-form-item>
          <label>重置密码</label>
          <a-input v-model="account_form.password" type="password">
          </a-input>
        </a-form-item>

        <a-form-item>
          <label>确认密码</label>
          <a-input v-model="account_form.passwords" type="password">
          </a-input>
        </a-form-item>

        
        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
              <a-col :span="14"><a-input type="password" autocomplete="off" /></a-col>
              <a-col :span="10"><a-button type="primary">获取验证码</a-button></a-col>
              <a-button 
              type="primary" 
              @click="getCode"
              block 
              :disabled="button_disabled" 
              :loading="button_loading">{{button_text}}</a-button>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block> 
            登录
          </a-button>
        </a-form-item> 

      </a-form>
    </div>
    
  </div>
    
</template>

<script>
// @ is an alias to /src
import {reactive,toRefs,ref,onMounted} from "vue";
import {checkPhone,checkPassword} from "@/utils/validate";
export default {
  name: "Login",

  setup(props){
    const checkUsername = async(rule,value,callback)=>{
   
    if(!value){
        return Promise.reject('请输入用户名')
    }else if(!regPhong.test(value)){
        return Promise.reject('请输入11位数字的手机号')
    }
    if(!Number.isInteger(value)){
        return Promise.reject('Please input digits')
    }else{
        if(value<18){
            return Promise.reject('Age must be greater than 18')
        }else{
            return Promise.resolve()
        }
    }
}
    const formConfig = reactive({
      layout:{
        labelCol:{span:10},
        wrapperCol:{span:14}
      },
      account_form:{
          username:"",
          password:"",
          passwords:"",
          code:""
      },
      rules_form:{
          username:[{validator:checkUsername,trigger:'change'}],
          password:[{validator:checkPassword,trigger:'change'}],
      },
      button_text:"获取验证码",
      button_loading:false,
      button_disabled:false
    })

    const data = toRefs(formConfig);
    const handleFinish = ()=>{
        alert(111)
    }
    const getCode = ()=>{
        setInterval(()=>{
            console.log(111)
        },1000)
    }
    return {
      ...data,
      handleFinish,
      getCode
    }
  }
};
</script>
<style lang="scss">
@import "style.scss";
</style>