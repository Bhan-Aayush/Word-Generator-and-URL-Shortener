const renderWordResponse = (res) => {
  
  if(!res){
    console.log(res.status);
  }
  
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
    return;
  }

  let wordList = []

  for(let i = 0; i < Math.min(res.length, 10); i++){
    
    wordList.push(`<li>${res[i].word}</li>`);
  }
  
  wordList = wordList.join("");

  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
  return;
}


const renderRawWordResponse = (res) => {
  
  let trimmedResponse = res.slice(0, 10);

  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

const renderJsonWordResponse = (res) => {

  let rawJson = {};
  for(let key in response){
    rawJson[key] = response[key];
  }

  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");

  responseField.innerHTML = `<pre>${rawJson}</pre>`;
}

const renderByteResponse = (res) => {
  if(res.errors){
    
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {

    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

const renderRawByteResponse = (res) => {
  if(res.errors){
  
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;

    responseField.innerHTML = `${structuredRes}`;
  }
}

