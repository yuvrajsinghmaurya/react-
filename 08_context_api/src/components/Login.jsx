function Login() {
  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-brand">
          <span className="brand-mark">C</span>
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1 id="login-title">Login to your account</h1>
          </div>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <a href="#forgot-password">Forgot password?</a>
          </div>

          <button type="submit">Sign in</button>
        </form>

        <p className="signup-copy">
          New here? <a href="#create-account">Create an account</a>
        </p>
      </section>
    </main>
  )
}

export default Login
