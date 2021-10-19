const app=require('./app')
const config=require('dotenv')
config.config()
app.listen(process.env.PORT);
export{}
