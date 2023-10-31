// 
// 
// 

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visilbe";
    emailjs
    .sendForm(
        'service_i7xlhij',
        'template_xdx03qm',
        event.target,
        'Rl_7SXYFQZ8JlOrCE'
    ).then(() => {
        loading.classList.remove("modal__overlay--visilbe");
        success.classList += " modal__overlay--visilbe";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visilbe");
        alert(
            "The email service is temporarly unavailable. Please contact me directly on Cameron.cw@outlook.com"
        );
    })
}