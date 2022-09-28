async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("#comment").value.trim();

  if (comment) {
    console.log("comment = ", comment);
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_text: comment,
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
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
