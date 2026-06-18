import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/authApi";

function Signup() {
  const navigate = useNavigate();


const [formData,setFormData] = useState({

    fullName:"",
    email:"",
    password:""

});


const [loading,setLoading] = useState(false);

const [error,setError] = useState("");

const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

        setLoading(true);
        setError("");


        const response =
        await signup(formData);



        localStorage.setItem(
            "token",
            response.token
        );


        localStorage.setItem(
            "user",
            JSON.stringify(response.user)
        );


        navigate("/dashboard");


    }
    catch(error){

        setError(
            error.response?.data?.message ||
            "Signup failed"
        );

    }
    finally{

        setLoading(false);

    }

};

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-blue-600">EngineerHub</div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-slate-600">
              Already a member?
            </span>

            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background Shape */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
            <circle cx="80" cy="20" r="15" fill="currentColor" />
          </svg>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Join the hub
            </h1>

            <p className="text-slate-600">
              The workspace for high-velocity engineering teams.
            </p>
          </div>

          {/* Card */}

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900">
                Create your account
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Start collaborating with your engineering team.
              </p>
            </div>
            {/* Form */}

            <form 
            onSubmit={handleSubmit}
            className="space-y-5 mt-2"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Linus Torvalds"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={formData.fullName}
                  onChange={(e)=>setFormData({...formData,fullName:e.target.value})}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Work Email
                </label>

                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={formData.email}
                    onChange={(e)=>
                    setFormData({
                    
                    ...formData,
                    
                    email:e.target.value
                    
                    })
                    }
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={formData.password}
                  onChange={(e)=>setFormData({...formData,password:e.target.value})}
                />

                <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    info
                  </span>
                  Minimum 8 characters
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                {
                loading
                ?
                "Creating Account..."
                :
                "Create Account"

                }              </button>
            </form>

            {/* Terms */}
            <div className="mt-6 text-center text-sm text-slate-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>EngineerHub</div>

          <div className="flex flex-wrap gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
            <a href="#">Cookie Settings</a>
          </div>

          <div>© 2024 EngineerHub</div>
        </div>
      </footer>
    </div>
  );
}

export default Signup;


/*
==============================================================================
SIGNUP PAGE DOCUMENTATION
==============================================================================

Purpose:
- Naya user account create karna.

Frontend Fields:
1. fullName
2. email
3. password

Expected API Endpoint:
POST /api/auth/signup

Request Body:

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Success Response (201 Created):

{
  "success": true,
  "message": "Account created successfully",
  "user": {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token_here"
}

Possible Error Responses:

Email already exists:

{
  "success": false,
  "message": "Email already registered"
}

Validation Error:

{
  "success": false,
  "message": "Invalid input data"
}

Frontend Tasks During Integration:

1. Create state variables:
   - fullName
   - email
   - password
   - loading
   - error

2. Convert inputs into controlled components.

3. On form submit:
   - Prevent default form submit
   - Call signup API using fetch/axios

4. Show loading state:
   Button Text:
   "Creating Account..."

5. Handle Success:
   - Store JWT token
   - Store user info
   - Redirect to Dashboard

6. Handle Errors:
   - Show API error message
   - Highlight invalid fields


==============================================================================
*/