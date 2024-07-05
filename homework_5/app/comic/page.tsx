import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Comic {
    safe_title: string;
    img: string;
    alt: string;
    year: number;
    month: number;
    day: number;
}

async function fetchComicData() {
    const email = 'r.krainov@innopolis.university';

    const fetchComicId = async (email: string): Promise<number | null> => {
        const params = new URLSearchParams({ email });
        const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching comic ID:', error);
            return null;
        }
    };

    const fetchComic = async (id: number): Promise<Comic | null> => {
        const url = `https://fwd.innopolis.university/api/comic?id=${id}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching comic:', error);
            return null;
        }
    };

    const comicId = await fetchComicId(email);
    if (comicId === null) {
        throw new Error('Failed to fetch comic ID');
    }
    const comic = await fetchComic(comicId);
    if (comic === null) {
        throw new Error('Failed to fetch comic');
    }

    return comic;
}

const ComicPage = async () => {
    let comic: Comic | null = null;
    let error: string | null = null;

    comic = await fetchComicData();

    if (!comic) {
        return <p>Loading...</p>;
    }

    const date = new Date(comic.year, comic.month - 1, comic.day);

    return (
        <div>
            <img src={comic.img} alt={comic.alt} />
            <h2>{comic.safe_title}</h2>
            <p>{dayjs(date).fromNow()}</p>
        </div>
    );
};

export default ComicPage;
