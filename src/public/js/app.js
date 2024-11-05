const socekt = new WebSocket(`ws://${window.location.host}`);

socekt.addEventListener("open", () =>
{
    console.log("connected to Server");
})

socekt.addEventListener("message", (message) => {
    console.log("New message: ", message.data);
})

socekt.addEventListener("close", () =>
{
    console.log("Disconnected to Server X")
})

setTimeout(() => {
    socekt.send("hello from the browser!");
}, 10000)