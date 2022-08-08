import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUsers } from './userSlice'

export const UserView = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const { users, loading, error } = useAppSelector((state) => state.user)
  console.log('🚀 ~ file: UserView.tsx ~ line 12 ~ UserView ~ users', users)

  return (
    <div>
      {loading && <span>Loading...</span>}
      {!loading &&
        users.length > 0 &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>
        })}
      {!loading && error && <div>{error}</div>}
    </div>
  )

  // let content = 'Loading...'
  // if (!loading) {
  //   content = (
  //     <div>
  //       <h2>List of Users</h2>
  //       {users.map((user) => (
  //         <div key={Math.random()}>{user}</div>
  //       ))}
  //     </div>
  //   )
  // }
  // if (!loading && users.length === 0) {
  //   content = <div>{error}</div>
  // }

  // return <div>{content}</div>
}
