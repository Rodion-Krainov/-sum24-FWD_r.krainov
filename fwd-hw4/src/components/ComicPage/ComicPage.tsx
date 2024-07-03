import React, { Component } from 'react';
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

interface ComicPageState {
    comic: Comic | null;
    error: string | null;
}

class ComicPage extends Component<{}, ComicPageState> {
    state: ComicPageState = {
        comic: null,
        error: null
    };

    componentDidMount() {
        this.fetchComicId('r.krainov@innopolis.university')
            .then(comicId => this.fetchComic(comicId))
            .then(comic => this.setState({ comic }))
            .catch(error => this.setState({ error: error.message }));
    }

    fetchComicId(email: string): Promise<number> {
        const params = new URLSearchParams({ email });
        const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => data);
    }

    fetchComic(id: number): Promise<Comic> {
        const url = `https://fwd.innopolis.university/api/comic?id=${id}`;
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => data);
    }

    renderComic() {
        const { comic } = this.state;
        if (comic) {
            const date = new Date(comic.year, comic.month - 1, comic.day);
            return (
                <section>
                    <img src={comic.img} alt={comic.alt} />
                    <h2>{comic.safe_title}</h2>
                    <p>{dayjs(date).fromNow()}</p>
                </section>
            );
        }
        return null;
    }

    render() {
        const { error } = this.state;
        return (
            <div>
                <h1>Comic Page</h1>
                {this.renderComic()}
                {error && <p>Error fetching comic: {error}</p>}
            </div>
        );
    }
}

export default ComicPage;
