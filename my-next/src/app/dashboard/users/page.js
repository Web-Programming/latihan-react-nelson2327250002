import React, {useState} from 'react';

export default function Page(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name', name);
        console.log('Email', email);
        setName('');
        setEmail('');   
};

    return (
        <div>
            <h2>
                Create New User
            </h2>
            <form onSubmit={handleSubmit} className='nt-2'>
                <div>
                    <label htmlFor='name'>Name :</label>
                    <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(e.target.value)}
                    required
                    className='mt-1 block w-full '
                </div>
            </form>
        </div>
    _)
    
}
                