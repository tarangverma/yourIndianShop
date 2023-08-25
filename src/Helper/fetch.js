// const backend = process.env.REACT_APP_BACKEND;
const backend = "http://localhost:4000";
// const header = process.env.REACT_APP_API_CODE;
const header = "qubit-tech";

async function fetchreq(type,api,bd){
    console.log(backend)
    const url = `${backend}/${api}`;
    
    let res;
    if(type!="GET"){
        res = await fetch(url,{
            method: type,
            headers:{
                "Content-type":"application/json",
                "token":header
            },
            body: JSON.stringify(bd)
        })
    }else{
        res = await fetch(url,{
            method: type,
            headers:{
                "Content-type":"application/json",
                "token":header
            }
        })
    }
    const final = await res.json();
    if(final.status=="ok"){
        return final;
    }else{
        console.log(final.status)
        return false;
    }
}
async function uploadImageAws(name,img){
    let fn = name.split(".");
    let filetype = fn[fn.length - 1];
    const urldata = await fetchreq("GET",`geturl/${filetype}`,{});
    if(urldata){
        const url = urldata.url;
        const imgurl = url.split("?")[0];
        const finalurl = imgurl.split("/");
        await fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "multipart/form-data",
            },
            body: img,
        });
        return finalurl[finalurl.length-1];
    }else{
        return false;
    }
}
async function jwtauth(){
    let jwt = localStorage.getItem("token");
    jwt = JSON.parse(jwt)
    if(jwt){
        const final = await fetchreq("POST","checkUsertoken",{token: jwt})
        if(final){
            return final;
        }
    }
    return false;
    
}

module.exports ={fetchreq,uploadImageAws,jwtauth};