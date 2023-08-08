import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

let currentData = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onInputData, 500));

const dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY));
if (dataForm) {
  form.email.value = dataForm.email;
  form.message.value = dataForm.message;
  currentData = dataForm;
}
function onInputData() {
  currentData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(currentData));
}
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(currentData);

  localStorage.removeItem(LOCAL_KEY);
  form.email.value = '';
  form.message.value = '';
}
