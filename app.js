let form = document.querySelector("form");
form.addEventListener("submit",function (event){
    event.preventDefault();
    alert("Form submited") ;
       let formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});