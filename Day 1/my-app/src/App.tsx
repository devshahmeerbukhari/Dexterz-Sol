import { useForm } from 'react-hook-form';
import { Button, Box, TextField, Typography } from '@mui/material';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full viewport height
        backgroundColor: 'grey.200', // Optional background color for the page
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 4,
          backgroundColor: 'white', // Form background
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          boxShadow: 3, // Adds a subtle shadow
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
          {...register('name', {
            required: "Name is required",
            minLength: { value: 4, message: "Name must be at least 4 characters" },
          })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message?.toString() || ""}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          {...register('email', { required: "Email is required" })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message?.toString() || ""}
        />

        {/* Submit Button */}
        <Button type="submit" size="large" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default App;
