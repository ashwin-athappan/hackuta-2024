const express = require('express');
const cors = require('cors');
const {connectDB} = require('./db/connectDB');

const registerRoute = require('./routes/register/registerRoute');
const loginRoute = require('./routes/login/loginRoute');
const  updateDetailsRoute = require('./routes/updateDetails/updateDetailsRoute');

const app = express();
const port = 8080;

// create an express server and connect to MongoDB
const startServer = () => {
    app.listen(port, () => {
        connectDB().then(() => {
            console.log('Connected to MongoDB');
        });
        console.log(`Server running on port ${port}`);
    });
};

app.use(express.json());
app.use(cors());

app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/student/update', updateDetailsRoute);

app.get('/', async (req, res) => {
    return res.send("Hello");
});

startServer();