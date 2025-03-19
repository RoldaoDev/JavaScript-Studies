const btnLogin = document.querySelector(".btn");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".blocoInput")];

    fields.forEach(field => {
        if(field.value === "") form.classList.add("validateErro");
    });

    const formError = document.querySelector(".validateErro");
    if (formError) {
        formError.addEventListener("animationend", event => {
            if (event.animationName === 'preenche') {
                formError.classList.remove("validateErro")
            }
        })
    } else {
        alert("Tudo Certo")
    }
});