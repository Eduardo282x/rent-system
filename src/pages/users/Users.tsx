import React, { useEffect, useState } from 'react'
import { TableComponent } from '../../components/table/TableComponent'
import { columnsUsers } from './users.data'
import { IUsers } from '../../interfaces/users.interface';
import { getDataApi } from '../../backend/baseAxios';

export const Users = () => {

  const [users, setUsers] = useState<IUsers[]>([]);

  const getUsersApi = async () => {
    setUsers(await getDataApi('users'))
  }

  useEffect(()=> {
    getUsersApi();
  },[])

  return (
    <div className='flex items-center justify-center text-black rounded-xl bg-[#0a2647] p-4 my-16'>
      <TableComponent columns={columnsUsers} dataTable={users}></TableComponent>
    </div>
  )
}
