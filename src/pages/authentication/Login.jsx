import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form data
    if (!formData.email || !formData.password) {
      setErrors("Please fill in all fields");
      return;
    }
    setRememberMe(true);
    setIsLoading(true);
  };

  useEffect(() => {
    if (rememberMe) {
    // set auth state
      localStorage.setItem("auth", JSON.stringify({ email: formData.email }));
      navigate("/");
    }
    
  }, [rememberMe, formData.email, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              required
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              type="email"
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                required
                id="password"
                name="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
          </button>

          {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}

          <p className="text-center text-sm mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
