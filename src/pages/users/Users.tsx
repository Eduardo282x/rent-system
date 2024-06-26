import React, { useEffect, useState } from 'react'
import { TableComponent } from '../../components/table/TableComponent'
import { ICreateUser, columnsUsers, defaultValues, registerUser, userValidationSchame } from './users.data'
import { IUsers } from '../../interfaces/users.interface';
import { BaseApi, BaseApiReturn, getDataApi } from '../../backend/baseAxios';
import { FormUser } from '../../components/formUser/FormUser';
import { Dialog } from '@mui/material';
import { IFormReturn, actionsValid } from '../../interfaces/form.interface';

export const Users = () => {

  const [users, setUsers] = useState<IUsers[]>([]);

  const [bodyUsers, setBodyUsers] = useState<ICreateUser>(defaultValues);
  const [title, setTitle] = useState<string>('Agregar');
  const [action, setAction] = useState<actionsValid>('addApi');
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUsersApi = async () => {
    setUsers(await getDataApi('users'))
  }

  const openDialog = async (tableReturn: IFormReturn) => {
    const { data, action } = tableReturn;

    let responseBaseApi: BaseApiReturn;

    if(data) {
      data.identify = `${data.prefix}${data.identify}`;
      data.phone = `${data.prefixNumber}${data.phone}`;
    }

    if(data && action == 'edit'){
      
      data.name = data.Name;
      data.lastname = data.Lastname;
      data.prefix = data.Identify.substring(0,1);
      data.identify = data.Identify.substring(1);
      data.phone = data.Phone.substring(4);
      data.prefixNumber = data.Phone.substring(0,4);
      data.email = data.Email;
      data.civil = data.Civil;
      data.rol = data.Rol;

      console.log('parse data: ',data);
      
      responseBaseApi = await BaseApi(action,data, defaultValues ,'IdUsers','users');
    } else {
      responseBaseApi = await BaseApi(action,data, defaultValues ,'IdUsers','users');
    }
  

    console.log('data  ',data);
    
    
    setBodyUsers(responseBaseApi.body as ICreateUser)
    setTitle(responseBaseApi.title);
    setAction(responseBaseApi.action);
    if(responseBaseApi.open){handleClickOpen()}
    if(responseBaseApi.close){handleClose()}
    if(responseBaseApi){getUsersApi()}
  }

  useEffect(() => {
    getUsersApi();
  }, [])

  return (
    <div className='flex items-center justify-center text-black rounded-xl bg-[#0a2647] p-4 my-16'>
      {users.length > 0 && (
        <TableComponent columns={columnsUsers} dataTable={users} openForm={openDialog}></TableComponent>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <FormUser title={title} action={action} dataForm={registerUser} defaultValues={bodyUsers} validationSchema={userValidationSchame} extra={'rol'} keyWordId={'IdUsers'} onSubmitForm={openDialog}></FormUser>
      </Dialog>
    </div>


  )
}
