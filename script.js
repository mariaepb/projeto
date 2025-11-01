document.getElementById("form-contato").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const msgSucesso = document.getElementById("msg-sucesso");

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            msgSucesso.innerText = "Mensagem enviada com sucesso! ✅";
            form.reset();
        } else {
            msgSucesso.innerText = "Ocorreu um erro ao enviar. Tente novamente.";
        }
    } catch (error) {
        msgSucesso.innerText = "Ocorreu um erro ao enviar. Tente novamente.";
    }

    setTimeout(() => { msgSucesso.innerText = ""; }, 3000);
});

