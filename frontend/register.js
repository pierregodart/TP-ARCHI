const form = document.getElementById("registerForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const response=await fetch(

        "http://localhost:3000/auth/register",

        {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                username,
                email,
                password

            })

        }

    );

    const data=await response.json();

    if(response.ok){

        alert("Compte créé !");

        window.location.href="login.html";

    }

    else{

        alert(data.message);

    }

});