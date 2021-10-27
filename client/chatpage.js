console.log('chat.js file loaded!')
// IMPORTANT! By default, socket.io() connects to the host that
// served the page, so we dont have to pass the server url
var socket = io.connect()
//prompt to ask user's name
const username = prompt('Welcome! Please enter your name:')
// emit event to server with the user's name
socket.emit('new-connection', { username })
// captures welcome-message event from the server
socket.on('welcome-message', (data) => {
 console.log('received welcome-message >>', data)
 // adds message, not ours
 addMessage(data, false)

 // receives two params, the message and if it was sent by yourself
// so we can style them differently
function addMessage(data, isSelf = false) {
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    if (isSelf) {
    messageElement.classList.add('self-message')
    messageElement.innerText = `${data.message}`
    } else {
    if (data.user === 'server') {
    // message is from the server, like a notification of new user connected
    // messageElement.classList.add('others-message')
    messageElement.innerText = `${data.message}`
    } else {
    // message is from other user
    messageElement.classList.add('others-message')
    messageElement.innerText = `${data.user}: ${data.message}`
    }
    }
    // get chatContainer element from our html page
    const chatContainer = document.getElementById('chatContainer')
    // adds the new div to the message container div
    chatContainer.append(messageElement)
   }   
})
