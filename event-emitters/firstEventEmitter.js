const {EventEmitter} = require("events");

const TicketManager = require('./ticketManager')

const ticketManager = new TicketManager(10)
ticketManager.on('buy', ()=> {
    console.log('someone bought ticket');
})
ticketManager.once("buy", () => {
    console.log("This is only called once");
});
ticketManager.buy('hgvh@vjhj.com', 20)