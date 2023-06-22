export async function getMovies() {
    const res = await fetch("https://api.nomoreparties.co/beatfilm-movies");
    const result = await res.json();
    return result;
}
