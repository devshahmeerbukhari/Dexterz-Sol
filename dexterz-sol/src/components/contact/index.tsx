import { Place, PhoneInTalk, MailOutlineOutlined } from "@mui/icons-material";
import { Button, Box, TextField, Typography } from '@mui/material';
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface IFormInput {
  username: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string, // Added message field
}

function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // handle form submission
  };

  const onError = (err: any) => {
    console.log(err); // handle form submission
  };

  return (
    <div className="flex justify-center items-center max-w-full mx-4 md:mx-20 lg:mx-40 h-auto md:h-screen space-y-8 md:space-y-0 md:space-x-4 flex-col md:flex-row lg:flex-row">
      {/* Left Column - Contact Info */}
      <div className="w-full md:w-1/3 h-auto p-4">
        {/* Office Details */}
        <div className="flex flex-col items-start justify-evenly rounded-3xl p-10 space-y-8 bg-slate-200">
          <Place sx={{ color: "#3B82F6", fontSize: 30 }} />
          <div className="font-bold">
            <div>
              <div className="text-blue-500">Office 1:</div>
              <p>6740, Jabl at Toor, Mishrifah Dist, 23331 Jeddah, Saudi Arabia.</p>
            </div>
            <div>
              <div className="text-blue-500 mt-7">Contact:</div>
              <p>+966 53 717 7486</p>
            </div>

            <div>
              <div className="text-blue-500 mt-7">Office 2:</div>
              <p>1st Floor, 59-B, Johar Town, Lahore, Punjab, Pakistan.</p>
            </div>
            <div>
              <div className="text-blue-500 mt-7">Contact:</div>
              <p>+92 321 114 7670</p>
            </div>
          </div>
        </div>
        
        {/* Phone and Email */}
        <div className="mt-8 flex flex-col items-start justify-start space-y-4 rounded-3xl p-10 bg-slate-200">
          <div className="flex items-center space-x-4">
            <PhoneInTalk sx={{ color: "#3B82F6", fontSize: 30 }} />
            <div className="font-bold">
              <div className="text-blue-500">Call Us</div>
              <p>+966 53 717 7486</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MailOutlineOutlined sx={{ color: "#3B82F6", fontSize: 30 }} />
            <div className="font-bold">
              <div className="text-blue-500">Mail A quote</div>
              <p>info@dexterzsol.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-2/3 h-auto text-white p-4">
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit, onError)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            p: 4,
            height: "auto", // Adjust height for smaller screens
            width: "100%", 
            borderRadius: 3,
            boxShadow: 10,
            background: "linear-gradient(145deg, #1F2937, #3B82F6)", // Gradient background
            transition: "all 0.3s ease-in-out", // Smooth transition for hover effects
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom sx={{ color: "#FFF" }}>
            Registration Form
          </Typography>

          {/* Name Field */}
          <TextField
            label="Your Name*"
            variant="outlined"
            sx={{
              background: "opacity-0",
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                background: "white", // Make the background white inside the text field
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px", // Rounded corners for text field
                border: errors.username ? "1px solid red" : "none", // Red border on error (change made here)
              },
            }}
            fullWidth
            {...register("username", { required: "Name is required" })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message as string || ""}
          />

          {/* Email Field */}
          <TextField
            label="Your Email*"
            type="email"
            variant="outlined"
            sx={{
              background: "opacity-0",
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                background: "white",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                border: errors.email ? "1px solid red" : "none", // Red border on error (change made here)
              },
            }}
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message as string || ""}
          />

          {/* Phone Number Field */}
          <TextField
            label="Your Number*"
            type="string"
            variant="outlined"
            sx={{
              background: "opacity-0",
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                background: "white",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                border: errors.phoneNumber ? "1px solid red" : "none", // Red border on error (change made here)
              },
            }}
            fullWidth
            {...register("phoneNumber", { required: "Phone Number is required" })}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message as string || ""}
          />

          {/* Subject Field */}
          <TextField
            label="Subject*"
            type="string"
            variant="outlined"
            sx={{
              background: "opacity-0",
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                background: "white",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                border: errors.subject ? "1px solid red" : "none", // Red border on error (change made here)
              },
            }}
            fullWidth
            {...register("subject", { required: "Subject is required" })}
            error={Boolean(errors.subject)}
            helperText={errors.subject?.message as string || ""}
          />

          {/* Message Text Area */}
          <TextField
            label="Message*"
            variant="outlined"
            sx={{
              background: "opacity-0",
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                background: "white",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                border: errors.message ? "1px solid red" : "none", // Red border on error (change made here)
              },
            }}
            fullWidth
            multiline
            rows={4}  // Adjust the height as necessary
            {...register("message", { required: "Message is required" })}
            error={Boolean(errors.message)}
            helperText={errors.message?.message as string || ""}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#3B82F6",
              "&:hover": {
                backgroundColor: "#2563EB", // Button hover color
              },
              borderRadius: "12px",
              transition: "0.3s ease-in-out",
            }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default ContactPage;
