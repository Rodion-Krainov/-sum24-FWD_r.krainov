import React, { Component } from 'react';
import githubIcon from '../../assets/github.svg';
import telegramIcon from '../../assets/telegram.svg';
import emailIcon from '../../assets/email.svg';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-gray-800 text-white text-center p-4">
                <h2>Contact</h2>
                <p>You can reach me through the following platforms:</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/Rodion-Krainov" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="h-6"/>
                    </a>
                    <a href="https://t.me/rodion_IU" target="_blank" rel="noopener noreferrer">
                        <img src={telegramIcon} alt="Telegram" className="h-6"/>
                    </a>
                    <a href="mailto:r.krainov@innopolis.university">
                        <img src={emailIcon} alt="Email" className="h-6"/>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;