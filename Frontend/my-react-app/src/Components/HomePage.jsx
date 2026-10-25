import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-4">
        <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            <h1 className='text-4xl font-bold'>Welcome to the Home Page</h1>
            <p className='text-lg mt-2'>You have successfully logged in!</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            <h2 className='text-2xl font-bold'>What's Next?</h2>
            <p className='text-md mt-2'>Here are some things you can do:</p>
            <ul className='list-disc list-inside mt-2'>
                <li>Explore the features of our app</li>
                <li>Update your profile information</li>
                <li>Connect with other users</li>
            </ul>
        </div>
    </div>
  )
}

export default HomePage