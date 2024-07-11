import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

dayjs.extend(relativeTime);

interface Comic {
  safe_title: string;
  img: string;
  alt: string;
  year: number;
  month: number;
  day: number;
}

async function fetchComicData(email: string): Promise<Comic | null> {
  const fetchComicId = async (email: string): Promise<number | null> => {
    const params = new URLSearchParams({ email });
    const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

    try {
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching comic ID:", error);
      return null;
    }
  };

  const fetchComic = async (id: number): Promise<Comic | null> => {
    const url = `https://fwd.innopolis.university/api/comic?id=${id}`;

    try {
      const response = await fetch(url, { cache: 'force-cache' });
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching comic:", error);
      return null;
    }
  };

  const comicId = await fetchComicId(email);
  if (comicId === null) {
    throw new Error("Failed to fetch comic ID");
  }
  const comic = await fetchComic(comicId);
  if (comic === null) {
    throw new Error("Failed to fetch comic");
  }

  return comic;
}

interface ComicPageProps {
  comic: Comic | null;
  error: string | null;
}

export const getServerSideProps: GetServerSideProps<ComicPageProps> = async () => {
  const email = "r.krainov@innopolis.university";
  let comic: Comic | null = null;
  let error: string | null = null;

  try {
    comic = await fetchComicData(email);
  } catch (err) {
    error = (err as Error).message;
  }

  return {
    props: {
      comic,
      error,
    },
  };
};

const ComicPage: React.FC<ComicPageProps> = ({ comic, error }) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!comic) {
    return <p>No comic found</p>;
  }

  const date = new Date(comic.year, comic.month - 1, comic.day);

  return (
      <div>
        <Image
            src={comic.img}
            alt={comic.alt}
            width={500}
            height={500}
            style={{ width: '70%', height: 'auto' }}
        />
        <h2>{comic.safe_title}</h2>
        <p>{dayjs(date).fromNow()}</p>
      </div>
  );
};

export default ComicPage;
