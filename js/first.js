function loaddata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loaddata2(data));
}

function loaddata2(data) {
  const userd = document.getElementById("userContainer");
  for (const user of data) {
    // console.log(user.email);
    const userDiv = document.createElement("div");
    userDiv.classList.add("post");
    userDiv.innerHTML = `
    <h2>It's Users Mail :- ${user.email}</h2>
    <h2>It's Users Name :- ${user.name}</h2>
    `;
    userd.appendChild(userDiv);
  }
}
