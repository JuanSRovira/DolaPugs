const data = [
    {
        user: "Juanito",
        pass: "123",
        dolaPugs: 300
    },
    {
        user: "Perlita",
        pass: "345",
        dolaPugs: 200
    },
    {
        user: "Lucecita",
        pass: "567",
        dolaPugs: 600
    },
    {
        user: "SopaDeFideo",
        pass: "789",
        dolaPugs: 700
    },
    {
        user: "Balin",
        pass: "111",
        dolaPugs: 100
    },
    {
        user: "mollete",
        pass: "222",
        dolaPugs: 0
    }
]

const form = document.getElementById('form')

 form.addEventListener('submit', (evento)=>{
     evento.preventDefault();
     let usuario = document.getElementById('user').value
     let password = document.getElementById('password').value

    for(let index = 0; index < data.length; index++){
        if(data [index].user === usuario && data[index].pass === password){
            localStorage.setItem("usuario", data[index].user)
            localStorage.setItem("dolaPugs", data[index].dolaPugs)
            window.location.href = "/cajeroPUG.html"
        }else{
            console.log('Datos incorrectos');
        }
    }
    
})
