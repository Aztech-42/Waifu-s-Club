async function post() {
  const src = document.getElementById("waifu-img").src
  let name = document.getElementById("waifu-name").innerText
  let data = { src: src, name: name }
  fetch("http://localhost:8000/api", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  console.log(data)
}
function get() {
  fetch("http://localhost:8000/api", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => { document.getElementById("waifu-name").innerText = json['name'], document.getElementById("waifu-img").setAttribute("src", json["src"]) });
}
window.onload = function () {
  get()
};