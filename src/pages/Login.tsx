import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import InputField from "../components/ui/inputField";
import { FormData } from "../types/login.formdata";
import { LoginSchema } from "../form-validation/login.validation";
import { Toast } from "../utilities/toast";

const Login = () => {
    const navigate = useNavigate();

    const handleSuccess = () => {
        Toast.fire({
            icon: "success",
            title: "User logged in",
        });
        navigate("/thankyou")
    };

    const formik = useFormik<FormData>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        validateOnBlur: true,
        onSubmit: () => {
            handleSuccess()
        },
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-blue-500 mb-8 text-center">
                        Welcome, User
                    </h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email Address:
                            </label>
                            <InputField
                                formik={formik}
                                placeholder="Email"
                                name="email"
                                type="email"
                                className="rounded-md border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 w-full p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Password:
                            </label>
                            <InputField
                                formik={formik}
                                placeholder="Password"
                                name="password"
                                type="password"
                                className="rounded-md border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 w-full p-2"
                            />
                        </div>
                        <div className="mb-6">
                            <button
                                type="submit"
                                disabled={!formik.isValid}
                                className={`bg-blue-600 text-white rounded-lg py-2 hover:blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50 w-full transition-colors duration-300 ${!formik.isValid && 'bg-gray-400 cursor-not-allowed'}`}

                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
