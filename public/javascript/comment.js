async function commentFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("#comment").value.trim();
  const queryString = document.location.href;
  console.log(queryString);
  const splitString = queryString.split("/");
  const artId = splitString[splitString.length - 1];
  console.log(artId);

  if (comment) {
    console.log("comment = ", comment);
    const commentToAdd = { comment_text: comment, art_id: artId };
    console.log(commentToAdd);
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(commentToAdd),
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
