const storeLocally = () => {
  const name = document.querySelector('#full-name').value;
  const email = document.querySelector('#your-email').value;
  const message = document.querySelector('#type-message').value;
  const formDataObject = {
    name,
    email,
    message,
  };
  const stringifiedData = JSON.stringify(formDataObject);
  localStorage.setItem('formDataObject', stringifiedData);
};