import React, { useState, useEffect, MouseEvent, KeyboardEvent } from 'react';
import "./Calendar.css"

interface Day {
  day: number;
  month: string;
}

const Calendar: React.FC = () => {
  const getCurrentDate = (): Date => new Date();

  const [currentDate, setCurrentDate] = useState<Date>(getCurrentDate());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Day | null>(null);

  const getDaysInMonth = (date: Date): Day[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const daysArray: Day[] = [];

    for (let i = 1; i <= lastDay; i++) {
      daysArray.push({
        day: i,
        month: date.toLocaleString('en-US', { month: 'long' }),
      });
    }

    return daysArray;
  };

  const isCurrentMonth = (): boolean => {
    const currentDateStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const currentDateEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const today = getCurrentDate();

    return today >= currentDateStart && today <= currentDateEnd;
  };

  const handlePrevMonth = (): void => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    setSelectedDay(null);
  };

  const handleNextMonth = (): void => {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    if (nextMonthDate <= getCurrentDate()) {
      setCurrentDate(nextMonthDate);
      setSelectedDay(null);
    }
  };

  const closeAndReopenModal = (): void => {
    closeModal();
  };

  const handleDayClick = (day: Day): void => {
    const dayElement = document.getElementById(`day-${day.day}`);

    if (!dayElement) {
      console.error(`Element with id 'day-${day.day}' not found.`);
      return;
    }

    const dayElementRect = dayElement.getBoundingClientRect();
    const modalWidth = 292;
    const modalHeight = 188;

    const modalTop = dayElementRect.top - modalHeight - 40;
    const modalLeft = dayElementRect.left + dayElementRect.width / 2 - modalWidth / 2;

    if (selectedDay === day.day) {
      closeAndReopenModal();
    } else {
      setSelectedDay(day.day);
      setModalContent(day);

      document.documentElement.style.setProperty('--modal-top', `${modalTop}px`);
      document.documentElement.style.setProperty('--modal-left', `${modalLeft}px`);

      setIsModalOpen(true);
    }
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleEscapeKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOutsideClick = (event: MouseEvent): void => {
    const isDayClicked = (event.target as HTMLElement).classList.contains('day');

    if (!isDayClicked) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (event: Event): void => {
      if (event instanceof KeyboardEvent && event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: Event): void => {
      const isDayClicked =
        event instanceof MouseEvent &&
        (event.target as HTMLElement).classList.contains('day');

      if (!isDayClicked) {
        closeModal();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

const calculatePercentage = (day: Day): number => {
  const percentage = 100;
  return percentage;
};
  return (
    <div className="calendar">
      <div className="header">
        <div className="right-align">
          <button onClick={handlePrevMonth} className="button">
            &lt;
          </button>
          <h2 className="month-title">
            {currentDate.toLocaleString('en-US', { month: 'long' })}, {currentDate.getFullYear()}
          </h2>
          {!isCurrentMonth() && (
            <button onClick={handleNextMonth} className="button">
              &gt;
            </button>
          )}
        </div>
      </div>
      <div className="days">
        {getDaysInMonth(currentDate).map((day) => (
          <div key={day.day} id={`day-${day.day}`}>
            <div
              className={`day ${selectedDay === day.day ? 'selected' : ''} ${
                calculatePercentage(day) < 100 ? 'lowPercentage' : ''
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day.day}
            </div>
            <h1
              className={`procent ${
                calculatePercentage(day) < 100 ? 'lowPercentage' : ''
              }`}
            >{`${calculatePercentage(day)}%`}</h1>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="container">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h1 className="title-modal">{`${modalContent?.day}, ${modalContent?.month}`}</h1>
              <p className="modal-paragraf">
                Daily norm: <span className="span-modal">1.5L</span>
              </p>
              <p className="modal-paragraf">
                Fulfillment of the daily norm:{' '}
                <span className="span-modal">100%</span>
              </p>
              <p className="modal-paragraf">
                How many servings of water:{' '}
                <span className="span-modal">6</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
