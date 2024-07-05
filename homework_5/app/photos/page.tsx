import Image from 'next/image';
import photo1 from '../../public/photo-1.jpg';
import photo2 from '../../public/photo-2.jpg';
import photo3 from '../../public/photo-3.jpg';

const PhotosPage = () => {
    const photos = [
        photo1,
        photo2,
        photo3,
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold">Photos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div key={index}>
                        <Image src={photo} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosPage;
