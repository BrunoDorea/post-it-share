function copyToClipboard() {
    const linkText = document.getElementById("shared-link").innerText

    navigator.clipboard.writeText(linkText).then(() => {
        const message = document.getElementById("message")
        message.style.display = "inline"
        
        setTimeout(() => {
            message.style.display = "none"
        }, 2000)
    }).catch(err => {
        console.error("Erro ao copiar o link: ", err)
    })
}
