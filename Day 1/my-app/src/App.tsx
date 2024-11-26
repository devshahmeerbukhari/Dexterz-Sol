import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

// Import the login schema from the external file
import { loginSchema } from './schemas/loginSchema';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema), // Use the imported schema for validation
  });

  const [user, setUser] = useState<any>({
    username: '',
    email: '',
  });

  const onSubmit = (data: any) => {
    console.log(data); // handle form submission
  };

  const onError = (err: any) => {
    console.log(err); // handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value, // This updates the user state with the new value
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'grey.200',
      }}
    >
      {/* First Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 4,
          backgroundColor: 'white',
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Registration Form
        </Typography>

        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          {...register('username')} // Using react-hook-form to bind this field
          error={Boolean(errors.username)}
          helperText={errors.username?.message || ""}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          {...register('email')} // Using react-hook-form to bind this field
          error={Boolean(errors.email)}
          helperText={errors.email?.message || ""}
        />

        {/* Submit Button */}
        <Button type="submit" size="large" variant="contained">
          Submit
        </Button>
      </Box>

      {/* Second Form with custom validation */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 4,
          m: 10,
          backgroundColor: 'white',
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Registration Form using Yup
        </Typography>

        {/* Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="username" // Ensure the name matches the state variable
          value={user.username} // Controlled input value
          onChange={handleChange}
          error={Boolean(errors.username)}
          helperText={errors.username?.message || ""}
        />
      </Box>
    </Box>
  );
}

export default App;
