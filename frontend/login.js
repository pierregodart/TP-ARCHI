const form = document.getElementById("loginForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:3000/auth/login",
        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                email,
                password
            })

        }
    );

    const data = await response.json();

    if(response.ok){

        alert("Connexion réussie !");

        localStorage.setItem("user",JSON.stringify(data));

        window.location.href="index.html";

    }

    else{

        alert(data.message);

    }

});