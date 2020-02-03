{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\partightenfactor0

\f0\fs24 \cf0 var express = require('express');\
var app = express();\
\
app.get('/', function (req, res) \{\
  res.send('Hello World!');\
\});\
\
app.listen(3000, function () \{\
  console.log('Example app listening on port 3000!');\
\});}