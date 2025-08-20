
import React, { useState, useEffect } from 'react';

export const useInvitation = () => {
  const targetDate = "2026-12-20T15:00:00"; // fecha y hora del evento

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
      
    };
  };
  const [tiempoRestante, setTiempoRestante] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTiempoRestante(timeLeft);

      if (!timeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return tiempoRestante; 
};
