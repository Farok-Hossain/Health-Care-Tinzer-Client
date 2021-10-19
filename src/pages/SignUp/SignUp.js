import CommonForm from "../../components/CommonForm/CommonForm";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/signup.svg";

const SignUp = () => {
  return (
    <>
      <CommonHeader header="Sing Up" img={img}></CommonHeader>
      <CommonForm signin={false}></CommonForm>
    </>
  );
};

export default SignUp;
