import Link from "next/link";
import Swal from "sweetalert2";

type Props = {
  userToken: string;
  isInsideMenu: boolean;
  logout: () => void;
};
const LoginButtons = ({ userToken, isInsideMenu, logout }: Props) => {
  return (
    <>
      <div className={`flex items-center justify-end`}>
        {!userToken ? (
          <>
            <Link
              href="/signin"
              className={`${
                !isInsideMenu && "hidden"
              }  px-7 py-3 font-bold text-dark hover:opacity-70 dark:text-white lg:block lg:text-base`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className={`ease-in-up ${
                !isInsideMenu && "hidden lg:px-6"
              } rounded-md bg-primary px-2 py-3 font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp  lg:block lg:px-6  lg:text-base xl:px-9`}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            className={`ease-in-up ${
              !isInsideMenu && "hidden lg:px-6"
            } cursor-pointer rounded-md bg-primary px-2 py-3 font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp  lg:block lg:px-6  lg:text-base xl:px-9`}
            onClick={() => {
              Swal.fire({
                title: "Are you sure you want to log out?",
                icon: "question",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Yes, log out",
                cancelButtonText: "No, cancel",
              }).then(({ isConfirmed }) => {
                if (isConfirmed) logout();
              });
            }}
          >
            Log out
          </button>
        )}
      </div>
    </>
  );
};
export default LoginButtons;
