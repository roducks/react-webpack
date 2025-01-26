import React, { useEffect, useState } from "react"
import moment from "moment"
import "./style.scss"

const addZero = (n: string) => {
  n = n.toString()

  return n.length < 2 ? `0${n}` : n
}

const MONTHS = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
}

const getDayOfWeek = (year: number, month: number, day: number) => {
  return new Date(year, month - 1, day).getDay()
}

const getDaysInMonth = (year: number, month: number) => {
  return [
    31,
    !(year % 4) && (year % 100 || !(year % 400)) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ][month - 1]
}

export const Calendar = ({
  range = false,
  date = null,
  year = 0,
  month = 0,
  startDate = null,
  controls = true,
  setDate,
  onPrev,
  onNext,
}: CalendarProps) => {
  let dayOfMonth = 1
  let validDay = false
  const dateObj = new Date()
  const currentYear = Number(dateObj.getFullYear())
  const currentMonth = Number(dateObj.getMonth()) + 1
  const currentDay = Number(dateObj.getDate())

  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedMonth, setSelectedMonth] = useState(0)
  const [selectedDay, setSelectedDay] = useState(0)

  const [renderYear, setRenderYear] = useState(0)
  const [renderMonth, setRenderMonth] = useState(0)

  const [startDayOfWeek, setStartDayOfWeek] = useState(0)
  const [daysInMonth, setDaysInMonth] = useState(0)
  const [filterYear, setFilterYear] = useState(year)
  const [filterMonth, setFilterMonth] = useState(month)

  useEffect(() => {
    let y = currentYear
    let m = currentMonth

    if (startDate !== null && !range) {
      const [yy, mm] = startDate.split("-")

      y = Number(yy)
      m = Number(mm)
    } else if (year !== 0 && month !== 0) {
      y = year
      m = month
    } else if (date !== null) {
      const [yy, mm] = date.split("-")

      y = Number(yy)
      m = Number(mm)
    }

    if (date !== null) {
      const [yy, mm, dd] = date.split("-")

      setSelectedYear(Number(yy))
      setSelectedMonth(Number(mm))
      setSelectedDay(Number(dd))
    }

    setRenderYear(y)
    setRenderMonth(m)

    setStartDayOfWeek(getDayOfWeek(y, m, 1))
    setDaysInMonth(getDaysInMonth(y, m))
  }, [date, year, month, currentYear, currentMonth, startDate, range])

  const back = () => {
    setRenderMonth((m) => {
      if (m === 1) {
        return 12
      } else {
        return m - 1
      }
    })

    if (renderMonth === 1) {
      setRenderYear((y) => y - 1)
      setFilterYear(year - 1)
      setFilterMonth(12)
    } else {
      setFilterMonth(month - 1)
    }
  }

  const next = () => {
    setRenderMonth((m) => {
      if (m === 12) {
        return 1
      } else {
        return m + 1
      }
    })

    if (renderMonth === 12) {
      setRenderYear((y) => y + 1)
      setFilterYear(year + 1)
      setFilterMonth(1)
    } else {
      setFilterMonth(month + 1)
    }
  }

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value)
    setFilterYear(value)
    setRenderYear(value)
  }

  const handleMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value)
    setFilterMonth(value)
    setRenderMonth(value)
  }

  const select = (
    e: React.MouseEvent<HTMLAnchorElement>,
    year: number,
    month: number
  ) => {
    e.preventDefault()
    const input = e.target as HTMLElement
    const day = input.innerText
    const date = [year, addZero(String(month)), addZero(String(day))].join("-")

    setDate?.(date)
  }

  return (
    <div className="roducks__calendar">
      <div className="roducks__calendar--title">
        <div>
          <h3>{MONTHS[renderMonth as keyof typeof MONTHS]}</h3>
          <span>{renderYear}</span>
        </div>
      </div>
      <div className="roducks__calendar--nav">
        {typeof onPrev === "function" && <button onClick={onPrev}>Prev</button>}
        {typeof onNext === "function" && <button onClick={onNext}>Next</button>}
      </div>

      {controls && (
        <div className="roducks__calendar--ctrls">
          <div className="roducks__calendar--filters">
            <select
              className="form-control"
              value={filterYear}
              onChange={handleYear}
            >
              {[year - 1, year].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <select
              className="form-control"
              value={filterMonth}
              onChange={handleMonth}
            >
              {Object.keys(MONTHS).map((i) => {
                const m = Number(i)
                return (
                  <option key={m} value={m}>
                    {MONTHS[m as keyof typeof MONTHS]}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="roducks__calendar--buttons">
            <button
              type="button"
              className="btn btn-lg btn-default"
              onClick={back}
            >
              Prev
            </button>
            <button
              type="button"
              className="btn btn-lg btn-default"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <table
        className="roducks__calendar--table"
        width="100%"
        cellSpacing="0"
        cellPadding="0"
        border={0}
      >
        <thead>
          <tr>
            <th>DOM</th>
            <th>LUN</th>
            <th>MAR</th>
            <th>MIE</th>
            <th>JUE</th>
            <th>VIE</th>
            <th>SAB</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, week) => {
            return (
              <tr key={week}>
                {[...Array(7)].map((_, dayOfWeek) => {
                  let cell = <></>
                  let picked = ""

                  if (week === 0 && startDayOfWeek === dayOfWeek) {
                    validDay = true
                  } else if (validDay && dayOfMonth > daysInMonth) {
                    validDay = false
                  }

                  if (
                    Number(renderYear) === Number(currentYear) &&
                    Number(renderMonth) === Number(currentMonth) &&
                    dayOfMonth === Number(currentDay)
                  ) {
                    picked = "today"
                  }

                  if (
                    Number(selectedYear) === Number(renderYear) &&
                    Number(selectedMonth) === Number(renderMonth) &&
                    Number(selectedDay) === dayOfMonth
                  ) {
                    picked = "selected"
                  }

                  if (validDay) {
                    cell = (
                      <td className={picked}>
                        {moment(
                          [
                            renderYear,
                            addZero(String(renderMonth)),
                            addZero(String(dayOfMonth)),
                          ].join("-")
                        ).diff(
                          moment(
                            [
                              currentYear,
                              addZero(String(currentMonth)),
                              addZero(String(currentDay)),
                            ].join("-")
                          ),
                          "days"
                        ) > 0 ? (
                          <>
                            {moment(
                              [
                                renderYear,
                                addZero(String(renderMonth)),
                                addZero(String(dayOfMonth)),
                              ].join("-")
                            ).diff(moment(startDate), "days") > 0 ||
                            startDate === null ? (
                              <a
                                href="#void"
                                className="active"
                                onClick={(e) => {
                                  select(e, renderYear, renderMonth)
                                }}
                              >
                                <span>{dayOfMonth}</span>
                              </a>
                            ) : (
                              <a href="#void" className="unactive">
                                <span>{dayOfMonth}</span>
                              </a>
                            )}
                          </>
                        ) : (
                          <a href="#void" className="unactive">
                            <span>{dayOfMonth}</span>
                          </a>
                        )}
                      </td>
                    )
                    dayOfMonth++
                  } else {
                    cell = (
                      <td className="empty">
                        <span>&nbsp;</span>
                      </td>
                    )
                  }

                  return <React.Fragment key={dayOfWeek}>{cell}</React.Fragment>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
