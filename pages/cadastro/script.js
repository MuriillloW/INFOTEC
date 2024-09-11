const form = document.getElementById('form');
const login = document.getElementById('login');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');
const phone = document.getElementById("phone");
const cpf = document.getElementById("cpf");
const cep = document.getElementById("cep");
const genero = document.getElementById("genero");
const data = document.getElementById("data");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const loginValue = login.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmarValue = confirmar.value.trim();
    const phoneValue = phone.value.trim();
    const cpfValue = cpf.value.trim();
    const cepValue = cep.value.trim();
    const generoValue = genero.value.trim();
    const dataValue = data.value.trim();

     if(loginValue === '') {
        setError(login, 'o login é necessario');
     } else {
         setSuccess(login);
     }

    if(usernameValue === '') {
        setError(username, 'o nome é necessario ');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, ' o seu email é necessário');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'digite um email válido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'a sua senha é necessária');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'a sua senha deve ter no minimo 8 digitos.');
    } else {
        setSuccess(password);
    }

    if(confirmarValue === '') {
        setError(confirmar, 'por favor confirme a sua senha');
    } else if (confirmarValue !== passwordValue) {
        setError(confirmar, "as senhas não batem");
    } else {
        setSuccess(confirmar);
    }

    if(dataValue === '') {
      setError(data, 'insira uma data válida');
    } else {
        setSuccess(data);
    }

  if(phoneValue === '') {
    setError(phone, 'o telefone é necessário ');
} else {
    setSuccess(phone);
}
if(cpfValue === '') {
  setError(cpf, 'o cpf é necessario ');

}


else {
  setSuccess(cpf);
}

if(cepValue === '') {
  setError(cep, 'o cep é necessario ');
} else {
  setSuccess(cep);
}
if(generoValue === '') {
  setError(genero, 'o seu genero é necessario ');
} else {
  setSuccess(genero);
}
}

$('#cnpj').mask('00.000.000/0000-00', {reverse: true});
$('#cpf').mask('000.000.000-00',{reverse: false});
$('#phone').mask('(00) 00000-0000');
$('#cep').mask('00000-000');
