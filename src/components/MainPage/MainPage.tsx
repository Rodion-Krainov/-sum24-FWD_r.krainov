import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div className="container mx-auto px-4">
                <h1 className="text-xl font-bold text-center my-6">Welcome to My Portfolio</h1>
                <p className="text-base text-center">Hi, I'm Krainov Rodion Aleksandrovich, a passionate web developer. I have experience in creating dynamic and responsive websites using the latest web technologies. Feel free to explore my website to learn more about my projects, view my photo gallery, and get in touch with me.</p>
                <p className="text-base text-center">Throughout my career, I have worked on various projects, ranging from simple landing pages to complex web applications. I am constantly learning and improving my skills to stay updated with the latest trends in web development. In my free time, I enjoy photography and exploring new technologies.</p>
                <p className="text-base text-center">If you are interested in collaborating on a project or just want to say hi, don't hesitate to contact me through the platforms listed below.</p>
            </div>
        );
    }
}

export default MainPage;