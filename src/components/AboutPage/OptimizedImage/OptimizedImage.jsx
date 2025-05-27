import { LazyLoadImage } from 'react-lazy-load-image-component';
import './OptimizedImage.css'; // Создайте этот файл для стилей

const OptimizedImage = ({ src, alt, placeholderColor }) => {
  return (
    <div className="image-container">
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        width="100%"
        height="auto"
        loading="lazy"
        placeholder={
          <div 
            className="image-placeholder"
            style={{ backgroundColor: placeholderColor || '#f0f0f0' }}
          />
        }
        threshold={300}
        visibleByDefault={true} // После загрузки изображение останется в DOM
      />
    </div>
  );
};

export default OptimizedImage;