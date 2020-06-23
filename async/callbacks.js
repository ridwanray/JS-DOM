const checker = document.getElementById("checker")

const posts = [
    {title: "Post 1", body: "This is a post 1"},
    {title: "Post 2", body: "This is a post 2"},
];

function getPost(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((value, ind, post1)=>{
        output += `<li>${value.title}</li>`
        })
        document.body.innerHTML =  output
    }, 1000);  
}

function creatPost(post){
    setTimeout(()=>{
        posts.push(post);
         
    }, 2000)
}

getPost()
creatPost({title:"post 3", body: "This is post 3"})