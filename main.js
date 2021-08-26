
var newPost=document.getElementById("newPost"),
forms =document.getElementById("forms"),
cancel=document.getElementById("cancel"),
post=document.getElementById("post"),
inputName=document.getElementById("inputName"),
inputSubjectTitle=document.getElementById("inputSubjectTitle"),
inputSubject=document.getElementById("inputSubject");
newPost.onclick=function(){
    forms.style.display="block";
    cancel.style.display="block";
    newPost.style.display="none";
}
cancel.onclick=function(){
    forms.style.display="none";
    cancel.style.display="none";
    newPost.style.display="block";
}
post.onclick=function(){
var divCard=document.createElement('div')
document.body.appendChild(divCard);
divCard.className=("card text-center");

var name=document.createElement('div');
divCard.appendChild(name);
name.className=("card-header");
name.innerHTML=inputName.value;

var divBody=document.createElement('div');
divCard.appendChild(divBody);
divBody.className=("card-body");

var subTitle=document.createElement('h5');
divBody.appendChild(subTitle);
subTitle.className=("card-title");
subTitle.innerHTML=inputSubjectTitle.value;

var subject=document.createElement('p');
divBody.appendChild(subject);
subject.className=("card-text");
subject.innerHTML=inputSubject.value;

var time=document.createElement('div');
divCard.appendChild(time)
time.className=("card-footer text-muted");
time.innerHTML=new Date;




var del=document.createElement('button');
divBody.appendChild(del);
del.className=("btn btn-primary");



delIcon=document.createElement('i');
del.appendChild(delIcon)
delIcon.className=("fas fa-trash-alt");

var token="1760187365:AAGUsh_uIKbl4vh4R_iAu5nTADV-HHYPraw";
var chat_id=-1001379337358;
var my_text='DataBase:%0A -His Name : '+inputName.value+' +%0A -His Subject Title : '+inputSubjectTitle.value+' +%0A -His Subject : '+inputSubject.value;
var url1='https://api.telegram.org/bot'
var url2=token+'/sendMessage?chat_id='+chat_id+'&text='+my_text ;
var url=url1+url2;
    var api = new XMLHttpRequest();
    api.open('GET',url,true);
    api.send();
del.onclick=function(){

    if (confirm("are your sure?")){
        document.body.removeChild(divCard);
}else{

}
}
}
