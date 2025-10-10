import './Logo.scss'

const Logo = (props) => {
  const title = 'Logo'
  const {loading} = props
  return (
    <a className="logo"
       href="/"
       title={title}
       aria-label={title}>
      <img
        class="logo__image"
        src="/logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>

  )
}

export default Logo