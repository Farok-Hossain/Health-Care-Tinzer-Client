import CommonForm from "../../components/CommonForm/CommonForm";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/signup.svg";

const SignUp = () => {
  return (
    <>
      <div className="signin_container">
        <CommonHeader
          img={img}
          header="Sign Up"
          //   flex="flex-row-reverse"
        ></CommonHeader>
      </div>
      <CommonForm signin={false}></CommonForm>
    </>
  );
};

export default SignUp;
