import { useEffect, useState } from 'react'
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

    if(data && action== 'addApi') {
      data.identify = `${data.prefix}${data.identify}`;
      data.phone = `${data.prefixNumber}${data.phone}`;
    }

    if(data && action == 'edit'){
      data.prefix = data.identify.substring(0,1);
      data.identify = data.identify.substring(1);
      data.phone = data.phone.substring(4);
      data.prefixNumber = data.phone.substring(0,4);
      responseBaseApi = await BaseApi(action,data, defaultValues ,'idUsers','users');
    } else {
      responseBaseApi = await BaseApi(action,data, defaultValues ,'idUsers','users');
    }

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
    <div className='flex items-center justify-center text-white rounded-xl bg-[#0a2647] p-4 my-16'>
      {users.length > 0 && (
        <TableComponent title={'Usuarios'} columns={columnsUsers} dataTable={users} openForm={openDialog}></TableComponent>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <FormUser title={title} action={action} dataForm={registerUser} defaultValues={bodyUsers} validationSchema={userValidationSchame} extra={'rol'} keyWordId={'idUsers'} onSubmitForm={openDialog}></FormUser>
      </Dialog>
    </div>


  )
}
