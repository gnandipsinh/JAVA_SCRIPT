document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const movie = document.getElementById("movie").value.trim();

    const container = document.getElementById("container");
    container.innerHTML = "";

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=475bd294&s=${movie}`
        );

        const data = await response.json();

        console.log(data);

        if (data.Response !== "True") {
            container.innerHTML = "<h2>Movie Not Found</h2>";
            return;
        }

        data.Search.forEach((movies) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${movies.Poster}" alt="${movies.Title}">
                <h3>${movies.Title}</h3>
                <p>Year : ${movies.Year}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.log(error);
        container.innerHTML = "<h2>Something went wrong!</h2>";
    }
});

