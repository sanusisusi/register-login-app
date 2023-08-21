import React, { useState } from 'react';
import { useRegister } from '../api';
import './RegisterForm.css';

function RegisterForm() {
  const { mutate, isLoading, isError, isSuccess } = useRegister();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      await mutate(formData);
      setFormData({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {isSuccess && <p className="text-green-500 mb-4">Registration successful!</p>}
      {isError && <p className="text-red-500 mb-4">Registration failed. Please try again.</p>}
      <form className='form-input' onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className=" btn-primary bg-blue-500 text-white px-4 py-2 rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
