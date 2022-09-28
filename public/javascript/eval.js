async function evalFormHandler(event) {
  event.preventDefault();

  const eval = document.querySelector("#evaluation").value.trim();

  if (eval) {
    console.log("eval = ", eval);
    const response = await fetch("/api/evals", {
      method: "POST",
      body: JSON.stringify({
        eval_value: eval,
        //art_id: event.target.getAttribute("data-id"),
        art_id: 1,
      }),
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
