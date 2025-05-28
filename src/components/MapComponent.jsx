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

    // Добавленная проверка перед загрузкой
    if (window.ymaps && window.ymaps.Map) {
      window.ymaps.ready(initMap);
      return;
    }

    // Если скрипт уже добавлен (но еще не загрузился)
    if (document.querySelector('script[src^="https://api-maps.yandex.ru"]')) {
      const checkYmaps = setInterval(() => {
        if (window.ymaps) {
          clearInterval(checkYmaps);
          window.ymaps.ready(initMap);
        }
      }, 100);
      return;
    }

    // Загрузка скрипта, если Яндекс.Карты еще не загружены
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

    return () => {
      if (mapInstance) {
        mapInstance.destroy();
      }
      if (ymapsScript && ymapsScript.parentNode) {
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
        <h4>адрес: г. Москва ул. Тушинская 9, к.3</h4>
        <p>в шаговой доступности от метро и МЦД Тушенская (5мин)</p>
        <p>график работы: с 09 ч. 00 мин. до 18 ч. 00 мин.</p>
      </div>
      <div ref={mapRef} className="map-container" />
    </div>
  );
}