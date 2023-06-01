const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", () => {
    const inputText = document.getElementById("input-text").value;
    const data = { text: inputText };

    fetch("/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
