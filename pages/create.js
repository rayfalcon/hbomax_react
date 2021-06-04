import Head from 'next/head'
import {useStateContext} from '../components/HBOProvider';
import ls from 'local-storage';
import {v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  console.log(globalState);

  const saveUser = () => {
    let users = [],
    user;

    if(ls('users') < 1) {
      user = {
        id: uuid(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)

      router.push('/login')
      
      console.log(users)
      console.log('lsusers', ls('users'))
    } else {
      users = ls('users')
      user = {
        id: uuid(),
        user: globalState.user,
        myListID: []
      }
      users.push(user)
      ls('users', users)
      console.log(users)
      console.log('lsusers', ls('users'))

      router.push('/login')
    }
  }

  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
            <span className="create-user__title">
              Who Is Watching?
            </span>
        </div>

        <div className="create-user__form">
            <img src={globalState.defaultUserImg} alt="" className="create-user__user-img" 
             />
            <div className="create-user__input-group">
                <label>Name</label>
                <input type="text" value={globalState.user} onChange={globalState.createUserAction} className="create-user__inputText" />
                <div className="create-user__colors">
                    <div className="create-user__color create-user__color--active" style={{
                        background: 'rgb(2, 27, 64)',
                        background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(119, 30, 135, 1) 100%)'
                    }}/>
                    <div className="create-user__color create-user__color--active" style={{
                        background: 'rgb(2, 27, 64)',
                        background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(238, 255, 18, 1) 100%)'
                    }}/>
                    <div className="create-user__color create-user__color--active" style={{
                        background: 'rgb(2, 27, 64)',
                        background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(135, 30, 66, 1) 100%)'
                    }}/>
                    <div className="create-user__color create-user__color--active" style={{
                        background: 'rgb(2, 27, 64)',
                        background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(119, 30, 135, 1) 100%)'
                    }}/>
                    <div className="create-user__color create-user__color--active" style={{
                        background: 'rgb(2, 27, 64)',
                        background: 'linear-gradient(135deg, rgba(2, 27, 64, 1) 11%, rgba(119, 30, 135, 1) 100%)'
                    }}/>
                </div>
            </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__save" onClick={saveUser}>Save</button>
          <button className="create-user__cancel">Cancel</button>
        </div>
      </div>
    </div>
  )
}
