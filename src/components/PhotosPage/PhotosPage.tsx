import React, { Component } from 'react';

class PhotosPage extends Component {
    // Assuming the photos are imported at the top or fetched dynamically
    photos = Array.from({ length: 7 }, (_, i) => require(`../../assets/photo-${i + 1}.jpg`));

    render() {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-6">Photos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {this.photos.map((photo, index) => (
                        <div key={index} className="max-w-sm mx-auto">
                            <img src={photo} alt={`View ${index + 1}`} className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PhotosPage;