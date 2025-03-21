//1. Using Promise Instead of Callback:
function fetchDataPromises() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
}

fetchDataPromises().then(data => console.log("Data:", data)).catch(err => console.error("Error:", err));


//2. Using async/await Instead of Callback:
async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log("Data:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}
fetchDataAsync();
