import React from 'react'
import "./User.css"

const UserSection = () => {
    return (
        <div className='user-wrapper'>
            <form>
                <h3>Upload a csv/json file</h3>
                <input type="file" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserSection