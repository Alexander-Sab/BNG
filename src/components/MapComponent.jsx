import { useEffect, useRef, useState } from 'react';
import './Map.css';

export default function YandexMap() {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);
  const apiKey = '2f51a76b-eabf-43ec-b650-88658b1aabd5';

  useEffect(() => {
    let ymapsScript = null;
    let mapInstance = null;

    const initMap = () => {
      if (!window.ymaps || !window.ymaps.Map) {
        setMapError('API Яндекс.Карт не загрузилось корректно');
        return;
      }

      try {
        mapInstance = new window.ymaps.Map(mapRef.current, {
          center: [55.826124, 37.448905],
          zoom: 15,
          controls: ['zoomControl']
        });

        const placemark = new window.ymaps.Placemark(
          [55.826124, 37.448905],
          {
            hintContent: 'Федеральная Служба ВНГ РФ',
            balloonContent: 'Адрес штаб-квартиры'
          },
          {
            preset: 'islands#redGovernmentIcon'
          }
        );

        mapInstance.geoObjects.add(placemark);
      } catch (error) {
        setMapError('Ошибка создания карты: ' + error.message);
        console.error('Map init error:', error);
      }
    };

    const loadYmaps = () => {
      ymapsScript = document.createElement('script');
      ymapsScript.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
      ymapsScript.async = true;
      
      ymapsScript.onload = () => {
        if (!window.ymaps) {
          setMapError('API Яндекс.Карт не загрузилось');
          return;
        }
        window.ymaps.ready(initMap);
      };

      ymapsScript.onerror = () => {
        setMapError('Ошибка загрузки API Яндекс.Карт');
      };

      document.head.appendChild(ymapsScript);
    };

    if (window.ymaps && window.ymaps.Map) {
      window.ymaps.ready(initMap);
    } else {
      loadYmaps();
    }

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
      if (ymapsScript) {
        document.head.removeChild(ymapsScript);
      }
    };
  }, []);

  if (mapError) {
    return <div className="map-error">{mapError}</div>;
  }

  return (
    
    
    <div className="map-wrapper">
    <div className="mesto">
        <h3 className="mesto-m">месторасположение подразделения</h3>
    </div>
      <div ref={mapRef} className="map-container" />
    </div>
   
  );
}