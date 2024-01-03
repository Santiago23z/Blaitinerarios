const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

let token = '6709071584:AAFeT01RpBy9Hdm3G5HqYR_P8ujM7ezEtjo'
const bot = new TelegramBot(token, {polling: true});
const channelIdOne = '-1001679093288'
const channelIdTwo = '-1001587405522'
const channelIdThree = '-1001538116034'
const port = 3000|process.env.PORT
const app = express();
app.use(cors())
app.use(express.json())


// Object users
const ObjectUsers = {};


// FUNCTIONS

const KickChatMember = (userId) => {
    bot.banChatMember(channelIdOne, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
    bot.banChatMember(channelIdTwo, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
    bot.banChatMember(channelIdThree, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
};

const UnbanChatMember = (userId) => {
    bot.UnbanChatMember(channelIdOne, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
    bot.UnbanChatMember(channelIdTwo, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
    bot.UnbanChatMember(channelIdThree, userId)
    .then(() => {
        console.log(`User kick from the channel ${userId}`)
    })
    .catch(err => console.log(`Error to kick user ${err}`))
};

const WelcomeUser = () => {
    bot.on("message", (chat) => {
        
            const buttonsLinks = {
                inline_keyboard : [
                    [
                        {
                            text : "⚽️BLA SOCCER BOT",
                            url: "https://t.me/+dHaGPyOqsOdhYzJh"
                        },
                        {
                            text : "⛳️BLA CORNERS BOT",
                            url: "https://t.me/+KGeaVj6JDNw3NjIx"
                        },
                        {
                            text : "BLA ITINERARIOS📗",
                            url: "https://t.me/+EgDuYr-6Nss4OWJh"
                        }
                    ]
                ]
            }
            const options = {
                reply_markup: JSON.stringify(buttonsLinks),
              };
            const message = "Ey parcerooo, Te doy una bienvenida al mundo BLA, aqui abajito estan los canales correspondientes"

            bot.sendMessage(chat.chat.id, message, options)
        }
    )
};

//ENDPOINTS

app.get("/test2", (req, res) => {
    res.json("hola")
    res.sendStatus(202)
})

app.post("/KickUser", (req, res) => {
    const { telegram_id } = req.body
    KickChatMember(telegram_id)
    res.sendStatus(200)
});

app.post("/UnbanUser", (req, res) => {
    const { telegram_id } = req.body
    UnbanChatMember(telegram_id)
    res.sendStatus(200)
});


app.post("/WelcomeUser", (req, res) => {
    res.sendStatus(200)
    WelcomeUser()
});

//SERVER ON PORT

app.listen(port, () => {
    console.log('Server on PORT', port)
})