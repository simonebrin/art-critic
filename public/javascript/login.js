async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //check the response status
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("TRYING!!!!");

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email, password);
  const newUser = {
    email: email,
    password: password,
  };
  console.log(newUser);
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: newUser,
      headers: { "Content-Type": "applcation/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
