const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors');
const app = express();


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// Initialize OpenAI API client
const openai = new OpenAIApi(configuration);

console.log(process.env.OPENAI_API_KEY)

// Body parser middleware
app.use(bodyParser.json());

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());

app.get('/test', (req, res) => {
  res.send('Hello, world!');
});


app.post('/legal_docs', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful at making legal documents ."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;

    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));




app.post('/legal_analyst', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful giving making legal documents more simple , explaining them and giving advice."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));



app.post('/finanice', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful analysing finanical documents,  giving various ratio and saying whether they are good or bad and putting verying in a simple report."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));


app.post('/social_media', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful at crafting five social media posts and messages with creativity and relevant tags"},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));






// Endpoint to receive prompt from React.js app

app.post('/feedback_analysis', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful analysing and giving metrics and advice on user feedback."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));



app.post('/customer_analysis', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful analysing and giving metrics and advice about customers."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));








// Endpoint to receive prompt from React.js app

app.post('/email_writer', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful at crafting professional emails ."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));



// Endpoint to receive prompt from React.js app

app.post('/document_anlyst', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful at analysing documents and making them very simple to unerstand."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));


// Endpoint to receive prompt from React.js app

app.post('/customer_response', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are at helpful responding to customers via email ."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;
console.log(response.data.choices[0].message.content)
    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));


app.post('/blog_generator', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are a helpful at writng good and eye catching blogs on request."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    console.log(response.data.choices[0].message.content)
    const answer = response.data.choices[0].message.content;

    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));


app.post('/adcontent', async (req, res) => {
 const { prompt } = req.body;
 console.log(req.body) 
   const value = req.body.prompt
             console.log(value);
  try{
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
        messages: [
          {"role": "system", "content": "You are a helpful Advertising assistant."},
          {role: "user", content: value}],    
});
console.log(response.data)
    // Extract answer from response
    const answer = response.data.choices[0].message.content;

    // Return answer to React.js app
    res.status(200).json({ answer });
    
  } catch (error) {
   console.log(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
}, cors({
  origin: 'http://localhost:3000'
}));


app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
console.log(req.body)
//  console.log(JSON.parse(req.body.query).prompt)
              
            const value = req.body.prompt
             console.log(value);

  try {
    const response = await openai.createImage({
      prompt: value,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data.data[0].url;

    console.log('Generated image URL:', imageUrl);

    res.json({ imageUrl: imageUrl });
    
  } catch (error) {
    
    console.error(error.message);
    res.status(500).json({ error: error });
  }
});



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});