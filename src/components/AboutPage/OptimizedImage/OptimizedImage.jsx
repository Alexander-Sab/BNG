// Создайте компонент для унифицированной загрузки изображений
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OptimizedImage = ({ src, alt, placeholderColor }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      width="100%"
      height="auto"
      loading="lazy"
      placeholder={
        <div 
          style={{
            backgroundColor: placeholderColor || '#f0f0f0',
            width: '100%',
            height: '100%'
          }}
        />
      }
      threshold={300} // Загружать когда до изображения осталось 300px
      beforeLoad={() => {
        // Можно добавить прелоадер
        const img = new Image();
        img.src = src;
      }}
    />
  );
};
export default OptimizedImage