export function checkPhone(value){
    let regPhong = /^1[0123456789]\d{9}$/;
    return regPhong.test(value)
}

export function checkPassword(){
    //数字加字母
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
}
// export function checkEmail(){
//     let reg =/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\[a-zA-Z]{2,4})$/
// }