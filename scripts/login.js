const signInbtn = document.getElementById("signIn")

signInbtn.addEventListener("click", ()=>{
    const userName = document.getElementById("userNameValue").value.trim().toLowerCase()  
    const passward = document.getElementById("passWord").value
    

    if(userName === "admin" && passward === "admin123"){
        // alert("sucessfully login") 
        window.location.assign("index.html")
        return;
    }else{
        alert("Worng Passward")
        return;
    }
})