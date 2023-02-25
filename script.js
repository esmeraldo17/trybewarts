const buttonEntrar = document.getElementById('buttonEntrar');

function alerta() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', alerta);

const checkbox = document.getElementById('agreement');
const buttonEnviar = document.getElementById('submit-btn');
buttonEnviar.disabled = true;

function selecionado() {
  if (checkbox.checked === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

function habilitarEnviar() {
  checkbox.addEventListener('change', selecionado);
}

habilitarEnviar();

function contador() {
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', () => {
    const span = document.getElementById('counter');
    span.innerHTML = 500 - textarea.value.length;
  });
}

contador();
