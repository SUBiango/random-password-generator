const upperCase = document.querySelector('[data-uppercase]')
const lowerCase = document.querySelector('[data-lowercase]')
const numbers = document.querySelector('[data-numbers]')
const special = document.querySelector('[data-special]')
const passwordOutput = document.querySelector('[data-password-output]')
const lengthInput = document.querySelector('[data-length-input]')
const lengthDisplay = document.querySelector('[data-length-display]')
const generateBtn = document.querySelector('[data-generate-btn]')
const infoTip = document.querySelector('[data-info-tip]')

// 1. As soon as the page loads, it should automatically generate a random password of 8
// 2. Remove password group when uncheck 
// 3. Change the number of passwords to generate when the slider changes 
// 4. Show 'click password to copy' message after password is generated
// 5. Copy password to clipboard when clicked 
// 6. Message disappears when password is copied until new password is generated 

document.addEventListener("DOMContentLoaded", function() {
    
    lengthInput.addEventListener("input", function () {
        lengthDisplay.textContent = lengthInput.value;
    });

    // Call generatePassword directly on page load
    const initialPassword = generatePassword()
    passwordOutput.value = initialPassword


    generateBtn.addEventListener('click', function() {
        const newPassword = generatePassword()
        passwordOutput.value = newPassword
    })

    function generatePassword() {
        
        let characters = ''

        if (upperCase.checked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (lowerCase.checked) characters += 'abcdefghijklmnopqrstuvwxyz'
        if (numbers.checked) characters += '0123456789'
        if (special.checked) characters += '!@#$%^&*()_+'
        
        if (!characters) {
            return 'Please select at least one character style'
        }
        
        let passwordLength = parseInt(lengthInput.value)
        

        let password = ''

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            password += characters.charAt(randomIndex)
        }

        return password
    }

})

function copyPassword() {
    let passwordInput = document.querySelector('[data-password-output]')
    passwordInput.select()
    document.execCommand('copy')
}




