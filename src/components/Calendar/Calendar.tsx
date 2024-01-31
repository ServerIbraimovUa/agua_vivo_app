import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./Calendar.styled";
import { useOutsideClick } from "../../hooks/useOutsideClick";

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
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  });

  const getDaysInMonth = (date: Date): Day[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const daysArray: Day[] = [];

    for (let i = 1; i <= lastDay; i++) {
      daysArray.push({
        day: i,
        month: date.toLocaleString("en-US", { month: "long" }),
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
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
    setSelectedDay(null);
  };

  const handleNextMonth = (): void => {
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
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
    const modalLeft =
      dayElementRect.left + dayElementRect.width / 2 - modalWidth / 2;

    if (selectedDay === day.day) {
      closeAndReopenModal();
    } else {
      setSelectedDay(day.day);
      setModalContent(day);

      document.documentElement.style.setProperty(
        "--modal-top",
        `${modalTop}px`
      );
      document.documentElement.style.setProperty(
        "--modal-left",
        `${modalLeft}px`
      );

      setIsModalOpen(true);
    }
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  // const handleOutsideClick = (event: MouseEvent): void => {
  //   const isDayClicked = (event.target as HTMLElement).classList.contains(
  //     "day"
  //   );

  //   if (!isDayClicked && selectedDay !== null) {
  //     closeAndReopenModal();
  //   }
  // };

  useEffect(() => {
    const handleEscapeKey = (event: Event): void => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const calculatePercentage = (): number => {
    const percentage = 100;
    return percentage;
  };

  return (
    <Styled.CalendarContainer>
      <header className="header">
        <div className="RightAlign">
          <button className="Button" onClick={handlePrevMonth}>&lt;</button>
          <div className="MonthTitle">
            {currentDate.toLocaleString("en-US", { month: "long" })},{" "}
            {currentDate.getFullYear()}
          </div>
          {!isCurrentMonth() && (
            <button className="Button" onClick={handleNextMonth}>&gt;</button>
          )}
        </div>
      </header>

      <Styled.Days>
        {getDaysInMonth(currentDate).map((day) => (
          <div key={day.day} id={`day-${day.day}`} className="hover active">
            {calculatePercentage() < 100 ? (
              <Styled.LowPercentageDay
                className={`day ${selectedDay === day.day ? "selected" : ""}`}
                onClick={() => handleDayClick(day)}
              >
                {day.day}
              </Styled.LowPercentageDay>
            ) : (
              <Styled.Day
                className={`day ${selectedDay === day.day ? "selected" : ""}`}
                onClick={() => handleDayClick(day)}
              >
                {day.day}
              </Styled.Day>
            )}
            <p
              className={`procent ${
                calculatePercentage() < 100 ? "lowPercentage" : ""
              }`}
            >{`${calculatePercentage()}%`}</p>
          </div>
        ))}
      </Styled.Days>

      {isModalOpen && (
        <Styled.Modal ref={menuRef}>
          <Styled.ModalContent>
            <Styled.Container>
              <button className="close hover active" onClick={closeModal}>
                &times;
              </button>
              <h1 className="TitleModal">{`${modalContent?.day}, ${modalContent?.month}`}</h1>
              <p className="ModalParagraf">
                Daily norm: <span className="SpanModal">1.5L</span>
              </p>
              <p className="ModalParagraf">
                Fulfillment of the daily norm:{" "}
                <span className="SpanModal">100%</span>
              </p>
              <p className="ModalParagraf">
                How many servings of water:{" "}
                <span className="SpanModal">6</span>
              </p>
            </Styled.Container>
          </Styled.ModalContent>
        </Styled.Modal>
      )}
    </Styled.CalendarContainer>
  );
};

export default Calendar;
