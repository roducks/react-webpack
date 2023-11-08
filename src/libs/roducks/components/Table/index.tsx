import React from "react"
import { Icon } from "../Icon"
import { Alert } from "../Alert"
import "./styles.scss"

export function Table<T>({ columns, data, sort, onSort }: TableProps<T>) {
  const renderDirection = (column: keyof T, direction: Sort, icon: string) => {
    return (
      <a
        href="#void"
        onClick={(e) => {
          e.preventDefault()
          if (typeof onSort === "function") {
            onSort(column, direction)
          }
        }}
      >
        <Icon name={`caret-${icon}`} />
      </a>
    )
  }

  return (
    <table className="roducks__table">
      <thead>
        <tr>
          {columns.map((column, columnIndex) => (
            <th key={`${column.title}-${columnIndex}`}>
              <div className="roducks__row roducks__row--spaced">
                <span>{column.title}</span>
                {column.sort && data.length > 1 && (
                  <>
                    {sort.column === column.field ? (
                      <span>
                        {sort.direction === "ASC" && (
                          <>{renderDirection(column.field, "DES", "up")}</>
                        )}
                        {sort.direction === "DES" && (
                          <>{renderDirection(column.field, "ASC", "down")}</>
                        )}
                      </span>
                    ) : (
                      <span>
                        {renderDirection(column.field, "DES", "up")}
                        {renderDirection(column.field, "ASC", "down")}
                      </span>
                    )}
                  </>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          <>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={`${column.field.toString()}-${columnIndex}`}>
                    <>
                      {typeof column.render === "function"
                        ? column.render(row)
                        : row[column.field]}
                    </>
                  </td>
                ))}
              </tr>
            ))}
          </>
        ) : (
          <tr>
            <td colSpan={columns.length}>
              <Alert type="info">There are no rows</Alert>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
