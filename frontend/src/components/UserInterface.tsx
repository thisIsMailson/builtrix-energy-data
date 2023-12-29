import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardComponent from './CardComponent'
import Image from 'next/image';

interface User {
    id: number;
    name: string;
    email: string;
}
interface UserInterfaceProps {
    backendName: string; //go
}

const UserInterface: React.FC<UserInterfaceProps> = ({ backendName }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const [users, setUsers] = useState<User[]>([])
    const [newUser, setNewUser] = useState<User>({ id: 0, name: '', email: '' })
    const [updateUser, setUpdateUser] = useState<User>({ id: 0, name: '', email: '' })

    // Define styles based on the backendName
    const backgroundColors: { [key: string]: string } = {
        go: 'bg-cyan-500',
    };
    const buttonColors: { [key: string]: string } = {
        go: 'bg-cyan-700 hover:bg-blue-600',
    };
    const bgColor = backgroundColors[backendName as keyof typeof backgroundColors] || 'bg-gray-500';
    const btnColor = buttonColors[backendName as keyof typeof buttonColors] || 'bg-gray-700 hover:bg-gray-600';

    // Fetch all users
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/${backendName}/users`)
                setUsers(response.data.reverse())
            } catch (error) {
                console.log('Error fetching data:', error)
            }
        }
        fetchData()
    }, [backendName, apiUrl])

    // create user
    const createUser = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${apiUrl}/api/${backendName}/users`, newUser)
            setUsers([response.data, ...users])
            setNewUser({ id: 0, name: '', email: '' })
        } catch (error) {
            console.log('Error creating user:', error)
        }
    }
    // Update a user
    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.put(`${apiUrl}/api/${backendName}/users/${updateUser.id}`, { name: updateUser.name, email: updateUser.email })
            setUpdateUser({ id: 0, name: '', email: '' })
            setUsers(
                users.map((user) => {
                    if (user.id === updateUser.id) {
                        return { ...user, name: updateUser.name, email: updateUser.email }
                    }
                    return user
                })
            )
        } catch (error) {
            console.log('Error updating user:', error)
        }
    }
    // Delete a user
    const deleteUser = async (id: number) => {
        try {
            await axios.delete(`${apiUrl}/api/${backendName}/users/${id}`)
            setUsers(users.filter((user) => user.id !== id))
        } catch (error) {
            console.log('Error deleting user:', error)
        }
    }
    return (
        <div className={`user-interface ${bgColor} ${backendName} w-full max-w-md p-4 my-4 rounded shadow`}>

            <Image src={`/${backendName}logo.svg`} alt={`${backendName} Logo`} width={100} height={100} className='flex flex-items-center'/>
            <h2 className='text-xl font-bold text-center text-white mb-6'>{`${backendName.charAt(0).toUpperCase() + backendName.slice(1,)} Backend`}</h2>
            {/* Create user */}
            <form onSubmit={createUser} className='flex flex-col mb-6 p-4 bg-blue-100 rounded shadow'>
                <input
                    className='border border-gray-400 rounded-lg py-2 px-4 mb-2'
                    placeholder='Name'
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                    className='border border-gray-400 rounded-lg py-2 px-4 mb-2'
                    placeholder='Email'
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <button type='submit' className={`w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600`}>Add user</button>
            </form>
            {/* Update user */}
            <form onSubmit={handleUpdateUser} className='mb-6 p-4 bg-blue-100 rounded shadow'>
                <input
                    placeholder='User Id'
                    value={updateUser.id}
                    onChange={(e) => setUpdateUser({ ...updateUser, id: parseInt(e.target.value) })}
                    className='mb-2 w-full p-2 border border-gray-300 rounded' />
                <input
                    placeholder='New Name'
                    value={updateUser.name}
                    onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
                    className='mb-2 w-full p-2 border border-gray-300 rounded' />
                <input
                    placeholder='New Email'
                    value={updateUser.email}
                    onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
                    className='mb-2 w-full p-2 border border-gray-300 rounded' />
                <button type='submit' className={`w-full p-2 text-white bg-green-500 rounded hover:bg-blue-600`}>Update user</button>
            </form>
            {/* displaying users */}
            <div className='space-y-4'>
                {users.map((user) => (
                    <div key={user.id} className='flex items-center justify-between bg-white p-4 rounded-lg shadow'>
                        <CardComponent card={user} />
                        <button onClick={() => deleteUser(user.id)} className={`${btnColor} text-white py-2 px-4 rounded`}>Delete user</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserInterface