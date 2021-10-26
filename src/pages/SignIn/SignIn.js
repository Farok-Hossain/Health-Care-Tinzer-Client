import CommonForm from "../../components/CommonForm/CommonForm";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/signin.svg";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="signin_container">
        <CommonHeader
          img={img}
          header="Sign In"
          //   flex="flex-row-reverse"
        ></CommonHeader>
      </div>
      <CommonForm signin={true}></CommonForm>
    </>
  );
};

export default SignIn;
