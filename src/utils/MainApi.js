export async function likeMovie(movie, token) {
    try {
        const res = await fetch(
            "https://api.krasnova.nomoredomains.rocks/movies/",
            {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(movie),
            }
        );
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function dislikeMovie(id, token) {
    try {
        const res = await fetch(
            `https://api.krasnova.nomoredomains.rocks/movies/${id}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export async function getLikeMovies(token) {
    try {
        const res = await fetch(`https://api.krasnova.nomoredomains.rocks/movies`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}
