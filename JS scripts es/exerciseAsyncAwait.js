// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStar() {
  const f = await fetch('https://swapi.co/api/starships/9/');
  const data = await f.json();
  console.log(data);
}


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getDa = async function() {

  try{
    const [ users, posts, albums ] = await Promise.all(urls.map(
      async function(url){
        let a = await fetch(url);
       return a.json();
      }
    ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  }  
  catch(err){
    console.log(err)

  }

}
  
// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]