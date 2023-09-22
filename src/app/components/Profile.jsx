import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectToken, setUser } from '../../features/auth/authSlice.js'
import { getUser, updateUserProfile } from '../../common/apiHandler';




const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)

    const [isEditing, setIsEditing] = useState(false);
    const [firstname, setFirstname] = useState(user?.firstName || '');
    const [lastname, setLastname] = useState(user?.lastName || '');
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser(token)
            .then(data => dispatch(setUser(data.body)))
    }, [])

    const handleEditClick = () => {
        setIsEditing(true);
        setError(null);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Call the updateUserProfile method to update the user's profile
        updateUserProfile(token, firstname, lastname)
          .then((data) => {
            dispatch(setUser(data.body));
            setIsEditing(false);
          })
          .catch((error) => {
            console.error('Error updating profile:', error);
            setError('Error updating profile: ' + error.message);
          });
      };

    return (
    <>
    <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user?.firstName} {user?.lastName} !</h1>
                {error && <span className="error">{error}</span>}
                <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
            </div>
            {isEditing && (
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Save</button>
            </form>
          )}
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main></>
    )
}

export default Profile