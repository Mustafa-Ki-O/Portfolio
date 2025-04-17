// hooks/useImagePreloader.js
import { useState, useEffect } from 'react';

const useImagePreloader = (imageUrls) => {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    loadedCount: 0,
    totalCount: imageUrls.length,
    error: null
  });

  useEffect(() => {
    if (imageUrls.length === 0) {
      setLoadingState({
        isLoading: false,
        loadedCount: 0,
        totalCount: 0,
        error: null
      });
      return;
    }

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = (e) => reject({ url, error: e });
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setLoadingState(prev => ({
          ...prev,
          isLoading: false,
          loadedCount: prev.totalCount
        }));
      })
      .catch(error => {
        setLoadingState(prev => ({
          ...prev,
          isLoading: false,
          error: `Failed to load image: ${error.url}`
        }));
      });

    return () => {
      // Cleanup if needed
    };
  }, [imageUrls]);

  return loadingState;
};

export default useImagePreloader;