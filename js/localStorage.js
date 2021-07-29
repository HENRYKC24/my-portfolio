const storeLocally = () => {
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const message = document.querySelector('.msg').value;
  const formDataObject = {
    name,
    email,
    message,
  };
  const stringifiedData = JSON.stringify(formDataObject);
  localStorage.setItem('formDataObject', stringifiedData);
};

const formDataObject = localStorage.getItem('formDataObject');
if (formDataObject) {
  const refinedFormDataObject = JSON.parse(formDataObject);
  document.querySelector('.name').value = refinedFormDataObject.name;
  document.querySelector('.email').value = refinedFormDataObject.email;
  document.querySelector('.msg').value = refinedFormDataObject.message;
}
const allFields = Array.from(document.querySelectorAll('.store'));
allFields.map((field) => {
  field.addEventListener('keyup', storeLocally);
  return true;
});