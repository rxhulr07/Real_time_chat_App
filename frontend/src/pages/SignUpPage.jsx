import {useState} from 'react'

const SignUpPage = () => {
  const [showPassword , setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {signup ,isSigninUp} = useAuthStore();

  const validateform = () =>{}
  const handleSubmit = (e) =>{}
  e.preventDefault();
  return (<div className="min-h-screen grid lg:grid-cols-2">
   <div className="w-full max-w-md space-y-8">
    
   </div>
    </div>
  )
}

export default SignUpPage