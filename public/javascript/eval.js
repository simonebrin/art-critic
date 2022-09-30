async function evalFormHandler(event) {
  event.preventDefault();

  const eval = document.querySelector("#evaluation").value.trim();
    const queryString = document.location.href;
    console.log(queryString);
    const splitString = queryString.split("/");
    const artId = splitString[splitString.length - 1];
    console.log(artId);

  if (eval) {
    console.log("eval = ", eval);
    const evalToAdd = {eval_value: eval, art_id: artId };
    console.log(evalToAdd);
    const response = await fetch("/api/evals", {
      method: "POST",
      body: JSON.stringify(evalToAdd),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".evaluation-form")
  .addEventListener("submit", evalFormHandler);
