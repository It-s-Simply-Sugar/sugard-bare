import image1 from '../../assets/footer-gallery/2.png';
import image2 from '../../assets/footer-gallery/3.png';
import image3 from '../../assets/footer-gallery/4.png';
import image4 from '../../assets/footer-gallery/5.png';
import image5 from '../../assets/footer-gallery/6.png';
import image6 from '../../assets/footer-gallery/7.png';
import image7 from '../../assets/footer-gallery/8.png';

const FooterGallery = () => {
  const images = [
    {
      id: 0,
      url: image1
    },
    {
      id: 1,
      url: image2
    },
    {
      id: 2,
      url: image3
    },
    {
      id: 3,
      url: image4
    },
    {
      id: 4,
      url: image5
    },
    {
      id: 5,
      url: image6
    },
    {
      id: 6,
      url: image7
    },
    {
      id: 0,
      url: image1
    },
    {
      id: 1,
      url: image2
    },
    {
      id: 2,
      url: image3
    },
    {
      id: 3,
      url: image4
    },
    {
      id: 4,
      url: image5
    },
    {
      id: 5,
      url: image6
    },
    {
      id: 6,
      url: image7
    }
  ];

  return (
    <div className="flex overflow-hidden gap-x-1" style={{ width: '100%' }}>
      {images.map((image) => (
        <img src={image.url} alt="" key={image.id} className="w-40 lg:w-64" />
      ))}
    </div>
  );
};

export default FooterGallery;
