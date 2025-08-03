// 'use client'
// import { useReactTable, getCoreRowModel, ColumnDef } from '@tanstack/react-table'
// interface Payment {}
// export const PaymentTable = () => {
//   return (
//     <>
//       <div>Date of Payment</div>
//       <div>End date of subscription</div>
//       <div>Price</div>
//       <div>Subscription Type</div>
//       <div>Payment Type</div>
//     </>
//   )
// }

import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table'

export type Subscription = {
  paymentDate: string
  endDate: string
  price: string
  subscriptionType: string
  paymentType: string
}

export const PaymentTable = ({ data }: { data: Subscription[] }) => {
  const columns: ColumnDef<Subscription>[] = [
    {
      header: 'Date of Payment',
      accessorKey: 'paymentDate',
    },
    {
      header: 'End date of subscription',
      accessorKey: 'endDate',
    },
    {
      header: 'Price',
      accessorKey: 'price',
    },
    {
      header: 'Subscription Type',
      accessorKey: 'subscriptionType',
    },
    {
      header: 'Payment Type',
      accessorKey: 'paymentType',
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
