function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if(!email.includes('@')) alert('Неверный формат ввода!')
    else if(!email.includes('.')) alert('Неверный формат ввода!')
    else alert('Все отлично!')
}