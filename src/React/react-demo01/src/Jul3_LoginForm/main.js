// const inputs = document.querySelectorAll("input");


// function addcl(){
//     let parent = this.parentNode.parentNode;
//     parent.classList.add("focus");
// }

// function remcl(){
//     let parent = this.parentNode.parentNode;
//     if(this.value == ""){
//         parent.classList.remove("focus");
//     }
// }


// inputs.forEach(input => {
//     input.addEventListener("focus", addcl);
//     // input.addEventListener("blur", remcl);
// });


const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
    input.addEventListener('focus',addcl);
    input.addEventListener('blur',remcl);
})

function addcl(){
    let parent = this.parentNode;
    console.log(parent)
    parent.classList.add("focus");
}

function remcl(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
