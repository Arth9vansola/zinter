import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <h1>hello welcome</h1>

      <SignedOut>
         <SignInButton>
          <button>Login</button>
         </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton/>

    </>
  )
}

export default App
