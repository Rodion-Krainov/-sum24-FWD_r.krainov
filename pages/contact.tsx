import Image from 'next/image';
import githubIcon from '../public/github.svg';
import telegramIcon from '../public/telegram.svg';
import emailIcon from '../public/email.svg';

const ContactPage = () => {
  return (
    <div className="bg-gray-800 text-white text-center p-4">
      <h2>Contact me</h2>
      <p>You can reach me through the following platforms:</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/Rodion-Krainov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="GitHub" className="h-6" />
        </a>
        <a
          href="https://t.me/rodion_IU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={telegramIcon} alt="Telegram" className="h-6" />
        </a>
        <a href="mailto:r.krainov@innopolis.university">
          <Image src={emailIcon} alt="Email" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
