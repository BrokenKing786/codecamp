const fs= require('fs')
fs.readFile('./content/subfolder/test.txt','utf-8',(err,data)=>{
    if(err)
    return;

    const f = data;

    // console.log(data);

    fs.readFile('./content/subfolder/test2.txt','utf-8',(err,data)=>{
        if(err)
        return;

        const f1 =data;
    
        fs.writeFile('./content/subfolder/result.sql',`the result is : ${f} ,${f1}`,(err,result)=>{
            if(err)
            return;
            console.log(result);
        })
    })
})