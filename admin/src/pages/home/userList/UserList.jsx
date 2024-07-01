import { DeleteOutline } from '@mui/icons-material';
import './userList.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const UserList = () => {
  const [data,setData]= useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user', headerName: 'Username', width: 180, renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt="" className='userListImg' />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'email', width: 180 },
    { field: 'status', headerName: 'Status', width: 120, },
    { field: 'transaction', headerName: 'Transaction', width: 150, },
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
       return (
         <>
         <Link to={"/user/"+params.row.id}>
           <button className="userListEdit">Edit</button>
         </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}  />
  
         </>
       )
     }
   },

  ];


  return (
    <div className='userList'>
      UserList
      <DataGrid 
      columns={columns} 
      rows={data} 
      disableRowSelectionOnClick  
      initialState={{ pagination: {  paginationModel: { page: 0, pageSize: 5 }, }}} 
      checkboxSelection />
    </div>
  )
}
