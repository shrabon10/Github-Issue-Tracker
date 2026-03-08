const signInbtn = document.getElementById("signIn")

signInbtn.addEventListener("click", ()=>{
    const userName = document.getElementById("userNameValue").value.trim().toLowerCase()  
    const passward = document.getElementById("passWord").value
    

    if(userName === "admin" && passward === "admin123"){
        window.location.assign("home.html")
        return;
    }else{
        alert("Invalid Passward")
        return;
    }
})