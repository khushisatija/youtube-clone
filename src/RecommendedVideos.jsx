import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';

function RecommendedVideos() {
  const videoCards = [
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.HOvGYlfbuXDeoN7Z0MdAkQHaEK&pid=Api&P=0&h=180',
      title: 'Learn React in 30 Minutes',
      channel: 'Tech Guru',
      views: '1M views',
      timestamp: '2 days ago',
      channelImage: 'https://yt3.ggpht.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s68-c-k-c0x00ffffff-no-rj'
    },
    {
      image: 'https://i.ytimg.com/vi/ATo3OAdFAk4/maxresdefault.jpg',
      title: 'Understanding JavaScript Closures',
      channel: 'Code Academy',
      views: '500K views',
      timestamp: '1 week ago',
      channelImage: 'https://yt3.ggpht.com/WBgH6_TagdReYRffPH4x3t_mUJcXB_u6x2lkofyq-aWlvajiZ6Ib7VYoY4Pr8hX0r9YdZR-F4A=s68-c-k-c0x00ffffff-no-rj'
    },
    {
      image: 'https://tse1.mm.bing.net/th?id=OIP.P0XQrVwDXDVKPoYBpMacpwHaEK&pid=Api&P=0&h=180',
      title: 'CSS Grid vs Flexbox',
      channel: 'Design Simplified',
      views: '200K views',
      timestamp: '3 days ago',
      channelImage: 'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s68-c-k-c0x00ffffff-no-rj'
    },
    {
      image: 'https://tse2.mm.bing.net/th?id=OIP.BhmTaKcHVTsbgdC9-ruo4gHaD4&pid=Api&P=0&h=180',
      title: 'Intro to Firebase for Web Developers',
      channel: 'Web Wizards',
      views: '300K views',
      timestamp: '5 days ago',
      channelImage: 'https://yt3.ggpht.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s68-c-k-c0x00ffffff-no-rj'
    },
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.7CbJvUlSb6JF0XewAoCMNQHaDj&pid=Api&P=0&h=180',
      title: 'Mastering Bootstrap 5',
      channel: 'Bootstrap Masters',
      views: '400K views',
      timestamp: '1 month ago',
      channelImage: 'https://yt3.ggpht.com/J3JuHt3-9s927algzQAfV2-IhQjG443vhQh2ePZeP7Kb-QknXzcJcWEXLn5cHXCr7qJrVHbsaMU=s68-c-k-c0x00ffffff-no-rj'
    },
    {
        image: 'https://tse3.mm.bing.net/th?id=OIP.bWd8KlmsK-ENqRrGUPX88QHaEK&pid=Api&P=0&h=180',
        title: 'JavaScript ES6 Tutorial',
        channel: 'JS Academy',
        views: '700K views',
        timestamp: '2 weeks ago',
        channelImage: 'https://yt3.ggpht.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s68-c-k-c0x00ffffff-no-rj'
      },
      {
        image: 'https://intellisoft.io/wp-content/uploads/2021/12/Angular-vs-React.png',
        title: 'React vs Angular: Which is Better?',
        channel: 'Web Dev Simplified',
        views: '900K views',
        timestamp: '1 month ago',
        channelImage: 'https://yt3.ggpht.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s68-c-k-c0x00ffffff-no-rj'
      },
      ,
    {
      image: 'https://tse3.mm.bing.net/th?id=OIP.G2edtPRk_06kxYYdrOplxQHaEK&pid=Api&P=0&h=180',
      title: 'Understanding Async/Await in JavaScript',
      channel: 'Traversy Media',
      views: '800K views',
      timestamp: '4 months ago',
      channelImage: 'https://yt3.ggpht.com/ytc/AIdro_m05oPc8I5nhz_ej6JdKoxA6vglaI76AMqtDELBj1s2o0o=s68-c-k-c0x00ffffff-no-rj'
    }
  ];

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videoCards.map((video, index) => (
          <VideoCard
            key={index}
            image={video.image}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
          />
        ))}
        {videoCards.map((video, index) => (
          <VideoCard
            key={index}
            image={video.image}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
          />
        ))}
        {videoCards.map((video, index) => (
          <VideoCard
            key={index}
            image={video.image}
            title={video.title}
            channel={video.channel}
            views={video.views}
            timestamp={video.timestamp}
            channelImage={video.channelImage}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
