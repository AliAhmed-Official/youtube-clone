import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({path:'./env'});

connectDB()
.then(() => {
  // see app.on on documentation
  app.on("error", (error) => {
    console.log("Error: ", error);
    throw error;
  })
  app.listen(process.env.PORT || 8000, () => {
    console.log('server is listening on port: ', process.env.PORT);
  });
})
.catch((err) => {
  console.log('MONGODB Connection failed: ', err);
});

console.log(process.env.PORT);