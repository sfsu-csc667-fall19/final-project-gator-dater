const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

const notes = [];

const broadcastMessage = (message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message)); //sends data from server to client
    }
  });
};

const updateUserCount = () => {
  broadcastMessage({
    type:'UPDATE_USER_COUNT',
    count: wss.clients.size,
  });
};

const broadcastAllMessages = (newNote) => {
  notes.unshift(newNote);
  broadcastMessage({
    type:'UPDATE_MESSAGES',
    notes,
  });
};

wss.on('connection', (ws) => { 
  console.log('Someone has connected');
  //broadcastMessage('someone has connected!');
  updateUserCount();
  ws.send(JSON.stringify({
    type:'UPDATE_MESSAGES',
    notes,
  }));

  ws.on('message', (message) => {
    const messageObject = JSON.parse(message);
    switch (messageObject.type) {
      case 'SEND_MESSAGE':
        broadcastAllMessages(messageObject.newNote);
        break;
    }
    console.log(message);
  });

  ws.on('close', () => {
    //broadcastMessage('someone has disconnected!');
    updateUserCount();
    console.log('someone has disconnected!');
  });

  ws.on('error', (e) => {
    console.log(e);
  });
});
