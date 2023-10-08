import axiosInstance from "@/utils/axiosInstance";

const AuthRequest = {
  signIn: async () => {
    const url = ``;
    const response = await axiosInstance.post(url);
    return response;
  },
  signUp: async () => {
    const url = ``;
    const response = await axiosInstance.post(url);
    return response;
  },
  signOut: async () => {
    const url = ``;
    const response = await axiosInstance.post(url);
    return response;
  },
};

export default AuthRequest;
