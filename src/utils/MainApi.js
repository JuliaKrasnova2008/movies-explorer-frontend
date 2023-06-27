export async function likeMovie(movie, token) {
    try {
        const res = await fetch(
            "https://api.krasnova.nomoredomains.rocks/movies/",
            {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    Accept: "application/json",
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
                    "Content-Type": "application/json",
                    Accept: "application/json",
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
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export function handleReg(user) {
    return fetch(
        "https://api.krasnova.nomoredomains.rocks/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(user),
        }
    ).then((res) => {
        return res.json()
    })
}
export function handleLogin(user) {
    return fetch(
        "https://api.krasnova.nomoredomains.rocks/signin",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(user),
        }
    ).then((res) => {
        return res.json()
    })
}
export function getUserInfo(token) {
    return fetch(
        `https://api.krasnova.nomoredomains.rocks/users/me`,
        {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
    ).then((res) => {
        return res.json()
    })
}

export function editUserInfo(token, data) {
    return fetch(
        `https://api.krasnova.nomoredomains.rocks/users/me`,
        {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        }
    ).then((res) => {
        return res.json()
    })
}