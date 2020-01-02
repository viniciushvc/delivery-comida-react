import React from 'react'

export default function Table({ column, items }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {items.map(item =>
            Object.keys(item).forEach(value => (
              <td key={item[value]}>{item[value]}</td>
            )),
          )}
        </tr>
      </tbody>
    </table>
  )
}
