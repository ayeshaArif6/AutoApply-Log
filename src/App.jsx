import { useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>AutoApply Log</h1>
      {user ? (
        <>
          <p>Signed in as <b>{user.email}</b></p>
          <button onClick={() => signOut(auth)}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signInWithPopup(auth, provider)}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default App;

