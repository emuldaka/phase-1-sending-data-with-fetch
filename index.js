// Add your code here
const formData = {};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

function submitData(name, email) {
  formData.name = name;
  formData.email = email;
  console.log("picnic", formData);
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
}
