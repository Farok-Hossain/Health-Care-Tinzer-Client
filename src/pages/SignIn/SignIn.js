import CommonForm from "../../components/CommonForm/CommonForm";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import img from "../../images/signin.svg";
const SignIn = () => {
  return (
    <>
      <CommonHeader
        img={img}
        header="Sign In"
        //   flex="flex-row-reverse"
      ></CommonHeader>
      <CommonForm signin={true}></CommonForm>
    </>
  );
};

export default SignIn;
