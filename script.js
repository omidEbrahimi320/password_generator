const showLenghtPassword = document.querySelector('.show-lenght-password');
const createPasswordButton = document.querySelector('.create-password');
const symbolsCheckbox = document.querySelector('.symbols-checkbox');
const digitsCheckbox = document.querySelector('.digits-checkbox');
const uppercaseCheckbox = document.querySelector('.uppercase-checkbox');
const lowercaseCheckbox = document.querySelector('.lowercase-checkbox');
const copyPassword = document.querySelector('.copy-password');
const boxShowPassword = document.querySelector('.box-show-password');
const inputRangePassword = document.querySelector('.range-password');
const showPassword = document.querySelector('.icon-show-password');
const hiddenPassword = document.querySelector('.icon-hidden-password');

createPasswordButton.addEventListener('click', onCreatePassword);
symbolsCheckbox.addEventListener('click', isCheckboxChecked);
digitsCheckbox.addEventListener('click', isCheckboxChecked);
uppercaseCheckbox.addEventListener('click', isCheckboxChecked);
lowercaseCheckbox.addEventListener('click', isCheckboxChecked);
copyPassword.addEventListener('click', clickToCopy);
showPassword.addEventListener('click', onShowPassword);
hiddenPassword.addEventListener('click', onHiddenPassword);



function rangePassword(event) {
    const valueRangePassword = event.target.value;
    
    showLenghtPassword.innerHTML = `length (${valueRangePassword})`;
}

function createPassword() {
    let arrayPassword = [];
    const symbols = ['!', '#', '$', '%', '&', '*'];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    const isSymbolChecked = document.querySelector('.symbols-checkbox').checked === true;
    const isDigitChecked = document.querySelector('.digits-checkbox').checked === true;
    const isUppercaseChecked = document.querySelector('.uppercase-checkbox').checked === true;
    const isLowercaseChecked = document.querySelector('.lowercase-checkbox').checked === true;
    const rangePassword = document.querySelector('.range-password');
    
    const checkboxIsChecked = isSymbolChecked || isDigitChecked || isUppercaseChecked || isLowercaseChecked;
    const toastElement = document.querySelector('.toast-element');

    if (isSymbolChecked) arrayPassword.push(...symbols);
    if (isDigitChecked) arrayPassword.push(...digits);
    if (isUppercaseChecked) arrayPassword.push(...uppercase);
    if (isLowercaseChecked) arrayPassword.push(...lowercase);
    
    if (checkboxIsChecked && (arrayPassword.length < rangePassword.value)) {
        toastElement.style.visibility = 'visible';
        setTimeout(() => {
            toastElement.style.visibility = 'hidden';
        }, 5000);
    } else {
        boxShowPassword.value = arrayPassword.sort(() => Math.random() - 0.5).slice(0, rangePassword.value).join('')
    }
}

function onCreatePassword() {
    createPassword()
    if (boxShowPassword.value) {
        copyPassword.removeAttribute('disabled', '');
        showPassword.classList.add('add-cursor');
        hiddenPassword.classList.add('add-cursor');
    }
}

function isCheckboxChecked() {
    const isSymbolChecked = document.querySelector('.symbols-checkbox').checked === true;
    const isDigitChecked = document.querySelector('.digits-checkbox').checked === true;
    const isUppercaseChecked = document.querySelector('.uppercase-checkbox').checked === true;
    const isLowercaseChecked = document.querySelector('.lowercase-checkbox').checked === true;
    const checkboxIsNotChecked = !isSymbolChecked && !isDigitChecked && !isUppercaseChecked && !isLowercaseChecked;

    if (checkboxIsNotChecked) {
        createPasswordButton.setAttribute('disabled', '');
        createPasswordButton.style.cursor = 'default';
    }
    else {
        createPasswordButton.removeAttribute('disabled', '');
        createPasswordButton.style.cursor = 'pointer';
    }
}

function clickToCopy() {
    navigator.clipboard.writeText(boxShowPassword.value);
    copyPassword.innerHTML = 'copied!';
    setTimeout(() => {
        copyPassword.innerHTML = 'copy';
    }, 2000);
}

function onShowPassword() {
    if (boxShowPassword.value) {
        boxShowPassword.setAttribute('type', 'text');
        hiddenPassword.style.display = 'block';
        showPassword.style.display = 'none';
    }
}

function onHiddenPassword() {
    if (boxShowPassword.value) {
        boxShowPassword.setAttribute('type', 'password');
        showPassword.style.display = 'block';
        hiddenPassword.style.display = 'none';
    }
}