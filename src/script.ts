import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

document.addEventListener('DOMContentLoaded', () => {
    const email = 'r.krainov@innopolis.university';
    const comicSection = document.getElementById('comic-section') as HTMLElement;
    const comicImg = document.getElementById('comic-img') as HTMLImageElement;
    const comicTitle = document.getElementById('comic-title') as HTMLElement;
    const comicDate = document.getElementById('comic-date') as HTMLElement;

    // Fetch the comic ID
    fetchComicId(email)
        .then(comicId => fetchComic(comicId))
        .then(comic => displayComic(comic))
        .catch(error => console.error('Error fetching comic:', error));

    function fetchComicId(email: string): Promise<number> {
        const params = new URLSearchParams({ email });
        const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;
        console.log('Fetching comic ID from URL:', url);
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then((data: number) => {
                console.log('Received comic ID:', data);
                return data;
            });
    }

    function fetchComic(id: number): Promise<Comic> {
        const url = `https://fwd.innopolis.university/api/comic?id=${id}`;
        console.log('Fetching comic from URL:', url);
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then((data: Comic) => {
                console.log('Received comic data:', data);
                return data;
            });
    }

    function displayComic(comic: Comic): void {
        comicImg.src = comic.img;
        comicImg.alt = comic.alt;
        comicTitle.textContent = comic.safe_title;
        const date = new Date(comic.year, comic.month - 1, comic.day);
        comicDate.textContent = dayjs(date).fromNow();
    }
});

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}
