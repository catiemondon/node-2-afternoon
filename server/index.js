const express= require("express");
const app= express()
const mc= require('./Controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseUrl="/api/messages"

app.post(messagesBaseUrl, mc.create);

app.get(messagesBaseUrl, mc.read);

app.put(`${messagesBaseUrl}/:id`, mc.update);

app.delete(`${messagesBaseUrl}/:id`, mc.delete)


app.listen(3001, ()=>{
    console.log('listening to port 3001')
})