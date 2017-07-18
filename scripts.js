function onInput(event, commentId){
    console.log("this",this);
    console.log(event.target.value);
    var commentElement = document.getElementById(commentId);

    if(event.target.value == '-'){

        commentElement.style.left = "30px";
        commentElement.style.top = "30px";
    }else{
        var targetElement = document.getElementById(event.target.value);


        if(targetElement ){
            var rect = targetElement.getBoundingClientRect();
            console.log(rect);


            commentElement.style.top = rect.top;
            commentElement.style.left = rect.right;
            commentElement.style.right = "";
            commentElement.style.bottom = "";

        }
    }

}


function init(){
    var commentElement = document.getElementById("comment1");
    commentElement.style.position = "absolute";
    commentElement.style.left = "30px";
    commentElement.style.top = "30px";
    commentElement.style.transition= "all 1s ease";
}

function foo(event){
    console.log(event);
}

init();