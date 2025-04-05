"use server";
import { Movie } from "../../types";

export async function fetchData(): Promise<Movie[]> {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error(`Failed fetch`);
    }

    const data = await response.json();
    return data.results;
}