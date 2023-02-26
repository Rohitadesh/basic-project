//variable decleration
let input=document.getElementById('input'),
length=document.getElementById('length'),
uppercase=document.getElementById('uppercase'),
lowercase=document.getElementById('lowercase'),
duplicate=document.getElementById('duplicate'),
special=document.getElementById('special'),
digit=document.getElementById('digit'),
submit=document.getElementById('submit'),
h1=document.getElementById('h1');



function random(len,s){
        let new_password='';
        // let l_c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';   
        password=s;
        console.log(password)
        let ps_length=password.length
        let count=0;
        while(count<len){
            new_password+=password.charAt(Math.floor(Math.random()*ps_length))
            count+=1
        }
        input.value=new_password;
}
length.addEventListener('click',()=>{
    let char_length=7;
    let l_c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    random(char_length,l_c);
});
  
special.addEventListener('click',()=>{
    let l_c='@#$%&*-\/';
    char_length=7;
    random(char_length,l_c)  
});
digit.addEventListener('click',()=>{
    let char_length=7;
    let l_c='0123456789';
    random(char_length,l_c);
});


lowercase.addEventListener('click',()=>{
    let char_length=7;
    let l_c='abcdefghijklmnopqrstuvwxyz'
    random(char_length,l_c)
});
uppercase.addEventListener('click',()=>{
    let char_length=7;
    let u_c='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    random(char_length,u_c)
});
























































































//string
// let new_password='';
// let l_c='abcdefghijklmnopqrstuvwxyz';
// let u_c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let char_length=4;
// password=l_c+u_c;
// let ps_length=password.length
// let count=0;
// while(count<char_length){
//     new_password+=password.charAt(Math.floor(Math.random()*ps_length))
//     count+=1
// }
// function random(){
//     let h1=document.querySelector('.h1')
//     let new_password='';
//     let l_c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     // console.log(l_c.length)
//     let char_length=7;
//     password=l_c;
//     let ps_length=password.length
//     let count=0;
//     while(count<char_length){
//         new_password+=password.charAt(Math.floor(Math.random()*ps_length))
//         count+=1
//     }
//     input.value=new_password
//     if(count==char_length){
//         h1.innerHTML='its valid'
//     }
//     else{
//         h1.innerHTML='its not valid'
//     }
// }
// // random()    
// submit.addEventListener('click',()=>{
//     random();
// })