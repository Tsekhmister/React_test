export function Footer() {
  return (
    <>
      <footer className="page-footer amber">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/Tsekhmister/react_movies">Repository</a>
          </div>
        </div>
      </footer>
    </>
  )
}
