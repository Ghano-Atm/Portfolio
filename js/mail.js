function send_mail() {

    document.querySelector(".alert-name").classList.add("invisible");
    document.querySelector(".alert-email").classList.add("invisible");
    document.querySelector(".alert-subject").classList.add("invisible");
    document.querySelector(".alert-message").classList.add("invisible");
    
    if (document.querySelector(".name").value == "") {
       
        document.querySelector(".alert-name").classList.remove("invisible");
   
    }  
    if (document.querySelector(".email").value == "") {
        
        document.querySelector(".alert-email").classList.remove("invisible");

    } 
    if (document.querySelector(".subject").value == "") {
        
        document.querySelector(".alert-subject").classList.remove("invisible");
    
    }
    if (document.querySelector(".message").value == "") {
        
        document.querySelector(".alert-message").classList.remove("invisible");

    } else {

        if (document.querySelector(".email").value != "" && document.querySelector(".email").value.indexOf("@") == -1) {

            document.querySelector(".alert-email").innerText = "Please enter a valid email"
            document.querySelector(".alert-email").classList.remove("invisible");
        
        } else {

            document.getElementById("btn_send_mail").innerHTML +=
            "<div class='spinner-border spinner-border-sm spinner' style = 'margin-left :10px;' role='status'><span class='visually-hidden'></span></div>";
           
            emailjs.init("3wChtHIbE8tupy9Jn");

            let params={

                name:document.querySelector(".name").value,
                email:document.querySelector(".email").value,
                subject:document.querySelector(".subject").value,
                message:document.querySelector(".message").value,
        
            } 

            const serviceid="service_u9o74js";
            const templateid="template_iawv3r6";

            emailjs.send(serviceid,templateid,params)
            .then(res=>{

            
                document.querySelector(".name").value = ""
                document.querySelector(".email").value = ""
                document.querySelector(".message").value = ""
                document.querySelector(".subject").value = ""
                document.querySelector(".spinner").remove()
                document.querySelector(".alert-msg").classList.add("alert-success")
                document.querySelector(".alert-msg").innerText = "Your email has been sent successfully."

            })
            .catch(err=>{
            

                document.querySelector(".spinner").remove()
                document.querySelector(".alert-msg").classList.add("alert-danger")
                document.querySelector(".alert-msg").innerHTML = "Error sending email, Try to contact me on <a class ='text-success' href='https://api.whatsapp.com/send?phone=213558775778'>WhatsApp?</a>"
        
            })

        }

    }
    
    
    
/*     else if (document.querySelector(".email").value.indexOf("@")==-1) {

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}    
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(255, 0, 0, 0.384);'><img src='public/images/error.png' alt='error'>Email incorrect.</div>";
        document.getElementById("alert").style.animation="anim3 0.1s both";
        document.getElementById("alert").style.animationIterationCount="2"
        

    } else {

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()} 
        document.getElementById("btn_send").innerHTML+="<div class='spinner-border spinner-border-sm spinner' role='status'><span class='visually-hidden'></span></div>";
        emailjs.init("3wChtHIbE8tupy9Jn");

        let params={

        name:document.querySelector(".name").value,
        email:document.querySelector(".email").value,
        message:document.querySelector(".message").value,

        } 

        const serviceid="service_u9o74js";
        const templateid="template_iawv3r6";

        emailjs.send(serviceid,templateid,params)
        .then(res=>{

        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}   
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(6, 145, 110, 0.363);'><img src='public/images/Ok.png' alt='Ok'>Email envoyé avec sucées.</div>"
        document.querySelector(".name").value=""
        document.querySelector(".email").value=""
        document.querySelector(".message").value=""
        document.querySelector(".spinner").remove()

        })
        .catch(err=>{
         
        if (document.querySelector("#alert")) {document.querySelector("#alert").remove()}     
        document.getElementById("div_send").innerHTML+="<div id='alert' style='background-color: rgba(255, 0, 0, 0.384);'><img src='public/images/error.png' alt='error'>Erreur d'envoie de l'email, Essayer <a href='https://api.whatsapp.com/send?phone=213558775778'>WhatsApp?</a></div>";
        document.getElementById("alert").style.animation="anim3 0.1s both";
        document.getElementById("alert").style.animationIterationCount="2"
        document.querySelector(".spinner").remove()})
    
    } */

}