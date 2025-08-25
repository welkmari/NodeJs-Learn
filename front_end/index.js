

fetch("http://localhost:3000/usuarios").then( async res=>{
    if(!res.ok){
        throw new Error("Erro ao buscar usuários");
    }
    console.log(res);
    console.log( await res.json());
}).catch(err=>{
    console.error(err);
});