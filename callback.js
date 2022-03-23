// document.getElementById('para').innerHTML = 'callback';

const posts = [
    {name:'abhinav',age:24},
    {name:'rohith',age:26}
]

function getPosts(){
    setTimeout(() => {
    var op =''
    posts.forEach((p)=>{
        op+= `<li>${p.name}<li>`;
    })
    // console.log(op);

    }, 1000);
};

getPosts();