import React, { useEffect, useState } from "react"
import { Calendar } from "../Calendar"
import moment from "moment"

export const DatePickerRange = ({
  from = null,
  to = null,
  onChange,
}: DatePickerRangeProps) => {
  const [datepickerFrom, setDatepickerFrom] = useState(false)
  const [datepickerTo, setDatepickerTo] = useState(false)
  const [fromDate, setFromDate] = useState<StringNull>(null)
  const [toDate, setToDate] = useState<StringNull>(null)
  const [fromYear1, setFromYear1] = useState<number>(0)
  const [fromYear2, setFromYear2] = useState<number>(0)
  const [toYear1, setToYear1] = useState<number>(0)
  const [toYear2, setToYear2] = useState<number>(0)
  const [fromMonth1, setFromMonth1] = useState<number>(0)
  const [fromMonth2, setFromMonth2] = useState<number>(0)
  const [toMonth1, setToMonth1] = useState<number>(0)
  const [toMonth2, setToMonth2] = useState<number>(0)

  const currentYear = moment().year()
  const currentMonth = moment().month() + 1

  const setFromHandle = (value: string) => {
    setFromDate(value)

    if (moment(value).diff(moment(toDate), "days") >= 0) {
      setToDate(null)
    }

    setDatepickerFrom(false)
    setDatepickerTo(true)
  }

  const setToHandle = (value: string) => {
    setToDate(value)
    setDatepickerTo(false)
  }

  const getDate = (date: string) => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      const [y, m, d] = date.split("-")

      return {
        year: Number(y),
        month: Number(m),
        day: Number(d),
      }
    }

    return null
  }

  const isEven = (month: number) => {
    return month % 2 === 1
  }

  const onPrevFrom = () => {
    const isFebruary = fromMonth2 === 2

    if (isFebruary) setFromYear1(fromYear1 - 1)
    if (isFebruary) setFromYear2(fromYear2 - 1)
    setFromMonth1(isFebruary ? 11 : fromMonth1 - 2)
    setFromMonth2(isFebruary ? 12 : fromMonth2 - 2)
  }

  const onNextFrom = () => {
    const nextMonth = fromMonth1 + 2
    const isDecember = fromMonth2 === 12

    if (isDecember) setFromYear1(fromYear1 + 1)
    if (isDecember) setFromYear2(fromYear2 + 1)
    setFromMonth1(isDecember ? 1 : nextMonth)
    setFromMonth2(isDecember ? 2 : nextMonth + 1)
  }

  const onPrevTo = () => {
    const isFebruary = toMonth2 === 2

    if (isFebruary) setToYear1(toYear1 - 1)
    if (isFebruary) setToYear2(toYear2 - 1)
    setToMonth1(isFebruary ? 11 : toMonth1 - 2)
    setToMonth2(isFebruary ? 12 : toMonth2 - 2)
  }

  const onNextTo = () => {
    const nextMonth = toMonth1 + 2
    const isDecember = toMonth2 === 12

    if (isDecember) setToYear1(toYear1 + 1)
    if (isDecember) setToYear2(toYear2 + 1)
    setToMonth1(isDecember ? 1 : nextMonth)
    setToMonth2(isDecember ? 2 : nextMonth + 1)
  }

  useEffect(() => {
    let fromMonth = 0
    let fromYear = 0
    let toMonth = 0
    let toYear = 0

    if (from !== null) {
      fromMonth = getDate(from)?.month ?? 0
      fromYear = getDate(from)?.year ?? 0
      setFromDate(from)
    } else {
      fromMonth = currentMonth
      fromYear = currentYear
    }

    if (isEven(fromMonth)) {
      setFromYear1(fromYear)
      setFromYear2(fromYear)
      setFromMonth1(fromMonth)
      setFromMonth2(fromMonth + 1)
    } else {
      setFromYear1(fromYear)
      setFromYear2(fromYear)
      setFromMonth1(fromMonth - 1)
      setFromMonth2(fromMonth)
    }

    if (to !== null) {
      toMonth = getDate(to)?.month ?? 0
      toYear = getDate(to)?.year ?? 0
      setToDate(to)
    } else {
      toMonth = currentMonth
      toYear = currentYear
    }

    if (isEven(toMonth)) {
      setToYear1(toYear)
      setToYear2(toYear)
      setToMonth1(toMonth)
      setToMonth2(toMonth + 1)
    } else {
      setToYear1(toYear)
      setToYear2(toYear)
      setToMonth1(toMonth - 1)
      setToMonth2(toMonth)
    }
  }, [from, to, currentMonth, currentYear])

  useEffect(() => {
    if (fromDate !== null) {
      const m = getDate(fromDate)?.month ?? 0
      const y = getDate(fromDate)?.year ?? 0
      const mm = Number(m)
      const yy = Number(y)

      if (isEven(mm)) {
        setToYear1(yy)
        setToYear2(yy)
        setToMonth1(mm)
        setToMonth2(mm + 1)
      } else {
        setToYear1(yy)
        setToYear2(yy)
        setToMonth1(mm - 1)
        setToMonth2(mm)
      }
    }
  }, [fromDate])

  useEffect(() => {
    onChange({
      from: fromDate,
      to: toDate,
    })
  }, [fromDate, toDate, onChange])

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            placeholder="from"
            value={fromDate ?? ""}
            onChange={(e) => {
              const value = e.target.value === "" ? null : e.target.value
              setFromDate(value)
            }}
            onFocus={() => {
              setDatepickerFrom(true)
              setDatepickerTo(false)
            }}
          />
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0 }}>
              {datepickerFrom && (
                <div
                  style={{ display: "inline-flex", backgroundColor: "#fff" }}
                >
                  <Calendar
                    date={fromDate}
                    year={fromYear1}
                    month={fromMonth1}
                    controls={false}
                    setDate={setFromHandle}
                    onPrev={onPrevFrom}
                  />
                  <Calendar
                    date={fromDate}
                    year={fromYear2}
                    month={fromMonth2}
                    controls={false}
                    setDate={setFromHandle}
                    onNext={onNextFrom}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="to"
            value={toDate ?? ""}
            onChange={(e) => {
              const value = e.target.value === "" ? null : e.target.value
              setToDate(value)
            }}
            onFocus={() => {
              setDatepickerTo(true)
              setDatepickerFrom(false)
            }}
          />
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0 }}>
              {datepickerTo && (
                <div
                  style={{ display: "inline-flex", backgroundColor: "#fff" }}
                >
                  <Calendar
                    range
                    date={toDate}
                    year={toYear1}
                    month={toMonth1}
                    controls={false}
                    setDate={setToHandle}
                    onPrev={onPrevTo}
                    startDate={fromDate}
                  />
                  <Calendar
                    range
                    date={toDate}
                    year={toYear2}
                    month={toMonth2}
                    controls={false}
                    setDate={setToHandle}
                    onNext={onNextTo}
                    startDate={fromDate}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
