import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton} from "@clerk/clerk-react";
import toast from 'react-hot-toast';

function HomePage() {
  return (
    <div>
      <button className='btn btn-secondary' onClick={()=> toast.error('this is a success toast')}>click me</button>

      <SignedOut>
        <SignInButton>
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton/>

    </div>
  )
}

export default HomePage