import React, { useState, useEffect } from "react";
import * as Styled from "./Calendar.styled";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import { getAmountMonthlyThunk } from "../../redux/water/water.operations";
import { useSelector } from "react-redux";
import { selectAmountMonthly } from "../../redux/water/waterSelectors";
import CalendarModal from "./CalendarModal";

export interface Day {
  day: number;
  month: string;
  percent?: number;
  dailyNorma?: number;
  amountOfWater?: number;
}
interface IDateInfo extends Day {
  percent?: number;
}
const Calendar: React.FC = () => {
  const getCurrentDate = (): Date => new Date();
  const [currentDate, setCurrentDate] = useState<Date>(getCurrentDate());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Day | null>(null);
  const amountMonth = useSelector(selectAmountMonthly);
  const id = `${currentDate.getFullYear()}-${(currentDate.getMonth() +1).toString().padStart(2, "0")}`;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAmountMonthlyThunk(id));
  }, [dispatch, id]);


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

  const handleDayClick = (day: Day): void => {
    if (selectedDay === day.day) {
      closeModal();
      setSelectedDay(null);
      return;
    }

    const dayElement = document.getElementById(`day-${day.day}`);

    if (!dayElement) {
      return;
    }

    const dayElementRect = dayElement.getBoundingClientRect();
    const modalWidth = 292;
    const modalHeight = 188;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let modalTop = dayElementRect.top - modalHeight - 10;
    let modalLeft =
      window.innerWidth <= 768
        ? window.innerWidth / 2 - modalWidth / 2
        : dayElementRect.left + dayElementRect.width / 2 - modalWidth / 2;

    if (modalTop < 0) {
      modalTop = 0;
    }

    if (modalTop + modalHeight > screenHeight) {
      modalTop = screenHeight - modalHeight;
    }

    if (modalLeft < 0) {
      modalLeft = 0;
    }

    if (modalLeft + modalWidth > screenWidth) {
      modalLeft = screenWidth - modalWidth;
    }

    setSelectedDay(day.day);
    setModalContent(day);

    document.documentElement.style.setProperty("--modal-top", `${modalTop}px`);
    document.documentElement.style.setProperty(
      "--modal-left",
      `${modalLeft}px`
    );

    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const getCurrentDayInfo = (day: IDateInfo) => {
    if(!amountMonth?.month) {
      day.percent = 0;
      day.amountOfWater = 0;
      day.dailyNorma = 2.0;
       return  
    }

    const currentDay = day.day.toString();
    const index = amountMonth.month
      .map((obj) => obj.date.slice(-2).trim())
      .indexOf(currentDay);

    if (index === -1) {
      day.percent = 0;
      day.amountOfWater = 0;
      day.dailyNorma = 2.0;
    }
    
    if (index !== -1) {
      const { amountOfWater, dailyNorma, percentage } =
        amountMonth.month[index];

      day.percent = percentage;
      day.amountOfWater = amountOfWater;
      day.dailyNorma = dailyNorma;
    }
  };

  return (
    <Styled.CalendarContainer>
      <div className="right-align">
        <h1 className="month">Month</h1>
        <div className="header">
          <button className="button" onClick={handlePrevMonth}>
            &lt;
          </button>
          <div className="month-title">
            {currentDate.toLocaleString("en-US", { month: "long" })},{" "}
            {currentDate.getFullYear()}
          </div>
          {currentDate.getMonth() === new Date().getMonth() &&
          currentDate.getFullYear() === new Date().getFullYear() ? (
            <button className={`button disabled`} disabled={true}>
              &gt;
            </button>
          ) : (
            <button className="button" onClick={handleNextMonth}>
              &gt;
            </button>
          )}
        </div>
      </div>

      <Styled.Days>
        {getDaysInMonth(currentDate).map((day: Day) => {
            getCurrentDayInfo(day);
          

          return (
            <li key={day.day} id={`day-${day.day}`} className="hover active">
              {day.percent !== undefined && day.percent < 100 ? (
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
                  day.percent !== undefined && day.percent < 100
                    ? "lowPercentage"
                    : ""
                }`}
              >{`${
                day.percent !== undefined && day.percent >= 100
                  ? 100
                  : day.percent
              }%`}</p>
            </li>
          );
        })}
      </Styled.Days>
     <CalendarModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} modalContent={modalContent} closeModal={closeModal}/>
     </Styled.CalendarContainer>
  );
};

export default Calendar;
