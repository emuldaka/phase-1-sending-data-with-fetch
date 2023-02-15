// Add your code here
const formData = {
  name: "",
  email: "",
};

function submitData(name, email) {
  formData.name = name;
  formData.email = email;
  console.log("picnic", JSON.stringify(formData));

  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const newId = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = "New ID: " + newId;
      document.body.appendChild(idElement);
    })
    .catch(function (error) {
      const message = error.message;
      const idElement = document.createElement("p");
      idElement.textContent = message;
      document.body.appendChild(idElement);
    });
}
