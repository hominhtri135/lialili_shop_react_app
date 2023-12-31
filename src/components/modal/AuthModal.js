import ForgotPassword from "components/ui/ForgotPassword";
import Login from "components/ui/Login";
import Modal from "./Modal";
import React from "react";
import SignUp from "components/ui/SignUp";
import useAuth from "hooks/useAuth";
import EmailVerification from "components/ui/EmailVerification";

const AuthModal = () => {
  const authModal = useAuth();
  const type = useAuth((state) => state.type);

  return (
    <Modal open={authModal.isOpen} onClose={authModal.onClose}>
      <div className="w-full">
        {type === "login" && <Login></Login>}
        {type === "signup" && <SignUp></SignUp>}
        {type === "emailVerification" && (
          <EmailVerification></EmailVerification>
        )}
        {type === "forgotPassword" && <ForgotPassword></ForgotPassword>}
      </div>
    </Modal>
  );
};

export default AuthModal;
