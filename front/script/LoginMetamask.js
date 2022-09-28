window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')
const userWallet = document.getElementById('userWallet')
const navbar = document.getElementById("navbar")
const type = document.getElementById('type')
let stat = ""

function toggleButton() {
  if (!window.ethereum) {
    loginButton.innerText = 'MetaMask is not installed'
    loginButton.classList.remove('bg-purple-500', 'text-white')
    loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
    return false
  }

  loginButton.addEventListener('click', loginWithMetaMask)
}

async function loginWithMetaMask() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
      console.error(e.message)
      return
    })
  if (!accounts) { return }

  window.userWalletAddress = accounts[0]
  console.log(typeof (window.userWalletAddress))
  if (window.userWalletAddress === "0xb52e60b7054b21e52f851464fff31c0abd000cc4" || window.userWalletAddress === "0xe6537ae9183651e3e11fe06211ef74df4c48944d" || window.userWalletAddress === "0xa4EC62C64A2D038963927574C9febfDF4E643915") {
    userWallet.innerText = window.userWalletAddress
    type.innerText = "Admin"
    stat = "Admin"
    var li = document.createElement("li");
    var a = document.createElement("a")
    a.setAttribute("href", "New.html")
    a.innerText = "New"
    li.setAttribute("id", "element4"); // added line
    li.appendChild(a)
    navbar.appendChild(li);
  }
  else {
    userWallet.innerText = window.userWalletAddress
    type.innerText = "User"
    stat = "User"
  }
  loginButton.innerText = window.userWalletAddress

  loginButton.removeEventListener('click', loginWithMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', signOutOfMetaMask)
  }, 200)
}

function signOutOfMetaMask() {
  window.userWalletAddress = null
  userWallet.innerText = ''
  loginButton.innerText = 'Sign in with MetaMask'

  loginButton.removeEventListener('click', signOutOfMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', loginWithMetaMask)
  }, 200)
}

window.addEventListener('DOMContentLoaded', () => {
  toggleButton()
});