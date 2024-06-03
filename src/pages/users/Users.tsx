import React from 'react'
import { TableComponent } from '../../components/table/TableComponent'
import { columnsUsers, DataUser } from './users.data'

export const Users = () => {
  return (
    <div className='flex items-center justify-center text-black rounded-xl bg-gray-600 p-4'>
      <TableComponent columns={columnsUsers} dataTable={DataUser}></TableComponent>
    </div>
  )
}
