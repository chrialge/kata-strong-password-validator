console.log('ciao')

function check_password() {
    const password = document.getElementById('password').value;
    console.log(password);
    let error = 0;
    let listError = [];

    const regexUppercase = /[A-Z]/g;
    const regexNumber = /[0-9]/;
    const regexCharacterSpecial = /[^a-zA-Z0-9]/



    if (password.length >= 9) {
        if (!listError.includes('rule-1')) {
            error++
            listError.push('rule-1')
        }

        const rule = document.getElementById('rule_1')
        const icon = rule.childNodes[1]

        rule.style.color = 'green'
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-check');


    } else {
        if (listError.includes('rule-1')) {
            error--;
            const newListError = listError.filter((rule) => {
                if (rule === 'rule-1') {

                } else {
                    return rule
                }
            });
            listError = [];
            listError = newListError
        }
        const rule = document.getElementById('rule_1')
        const icon = rule.childNodes[1]

        rule.style.color = 'red'
        icon.classList.remove('fa-check');
        icon.classList.add('fa-xmark');
    }


    if (regexUppercase.test(password)) {

        if (!listError.includes('rule-2')) {
            error++
            listError.push('rule-2')
        }
        const rule = document.getElementById('rule_2')
        const icon = rule.childNodes[1]

        rule.style.color = 'green'
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-check');

    } else {
        if (listError.includes('rule-2')) {
            error--;
            const newListError = listError.filter((rule) => {
                if (rule === 'rule-2') {

                } else {
                    return rule
                }
            });
            listError = [];
            listError = newListError
        }
        const rule = document.getElementById('rule_2')
        const icon = rule.childNodes[1]

        rule.style.color = 'red'
        icon.classList.remove('fa-check');
        icon.classList.add('fa-xmark');
    }


    if (regexNumber.test(password)) {


        if (!listError.includes('rule-3')) {
            error++
            listError.push('rule-3')
        }
        const rule = document.getElementById('rule_3')
        const icon = rule.childNodes[1]

        rule.style.color = 'green'
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-check');


    } else {
        if (listError.includes('rule-3')) {
            error--;
            const newListError = listError.filter((rule) => {
                if (rule === 'rule-3') {

                } else {
                    return rule
                }
            });
            listError = [];
            listError = newListError
        }
        const rule = document.getElementById('rule_3')
        const icon = rule.childNodes[1]

        rule.style.color = 'red'
        icon.classList.remove('fa-check');
        icon.classList.add('fa-xmark');
    }

    if (regexCharacterSpecial.test(password)) {


        if (!listError.includes('rule-4')) {
            error++
            listError.push('rule-4')
        }

        const rule = document.getElementById('rule_4')
        const icon = rule.childNodes[1]

        rule.style.color = 'green'
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-check');

    } else {

        if (listError.includes('rule-4')) {
            error--;
            const newListError = listError.filter((rule) => {
                if (rule === 'rule-4') {

                } else {
                    return rule
                }
            });
            listError = [];
            listError = newListError
        }
        const rule = document.getElementById('rule_4')
        const icon = rule.childNodes[1]

        rule.style.color = 'red'
        icon.classList.remove('fa-check');
        icon.classList.add('fa-xmark');
    }


    switch (error) {
        case 1:
            console.log(1)
            document.getElementById('bar').style.backgroundColor = 'red';
            document.getElementById('bar').style.width = '25%';
            document.getElementById('bar').style.height = '100%';
            break;
        case 2:
            console.log(2)
            document.getElementById('bar').style.backgroundColor = 'orange';
            document.getElementById('bar').style.width = '50%';
            document.getElementById('bar').style.height = '100%';
            break;
        case 3:
            console.log(3)
            document.getElementById('bar').style.backgroundColor = 'yellow';
            document.getElementById('bar').style.width = '75%';
            document.getElementById('bar').style.height = '100%';

            break;
        case 4:
            console.log(4)
            document.getElementById('bar').style.backgroundColor = 'green';
            document.getElementById('bar').style.width = '100%';
            document.getElementById('bar').style.height = '100%';

            break;

    }
}

