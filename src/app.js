import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}));
// form sy data aye tu yeah middleware lazmi use karna hai
app.use(express.json({
  limit:'16kb'
}))
// url sy data lyny ky liye yeah middleware use karyn lazmi
app.use(express.urlencoded({
  extended:true, // objects ky ander objects dy sakty
  limit:'16kb'
}));
app.use(express.static('public'));
app.use(cookieParser());



export {app};