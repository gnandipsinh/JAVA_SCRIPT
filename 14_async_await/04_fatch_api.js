async function fetchAPI() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();

    console.log(data);
}

fetchAPI();

const getValue = fetch(
    "https://jsonplaceholder.typicode.com/comments"
);

getValue
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });