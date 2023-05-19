export default function Login() {
    
    return(
        <>
                <main className="main">
        <div className="container signin-section">
            <div className="row justify-content-center">
                <h2 className="sign-in title">sign in</h2>
                <div className="col-md-6">
                    <form action="#" className="signin-form">
                        <h2 className="greeting title">welcome back!</h2>
                        <label htmlFor="signInEmail" className="form-label text-capitalize">email</label>
                        <input type="email" name="sign-in-email" id="signInEmail" className="form-control" required />
                        <label htmlFor="signInPassword" className="form-label text-capitalize">password</label>
                        <input type="password" name="sign-in-password" id="signInPassword" className="form-control" required />
                        <button type="submit" className="btn text-capitalize signin-btn">sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
        </>
    )
}