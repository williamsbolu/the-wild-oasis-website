import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;

// The signIn button cannot be a client component (the entire flow of the authentication should stay on the server)
// so we use serverActions by connecting the signIn button to a form, so by clicking d button the form will be automatically submitted
// what we pass into the action= prop a special function called the server action
