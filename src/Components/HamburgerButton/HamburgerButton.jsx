import styles from './HamburgerButton.module.css'
import classNames from 'classnames'

function HamburgerButton({setState}) {

  function handleClick(){
    console.log("fired")
    
    setState(prevState => !prevState);
  }
    return (
    <div className="min-h-[100px] min-w-[100px]"  >
        <div className={classNames(styles.menu, styles.cross, styles.menu1)}>
        <label>
          <input onClick={handleClick} className={styles.hamburgerCheckbox} type="checkbox" />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle className={styles.circle} cx="50" cy="50" r="30" />
            <path className={styles.line1} d="M0 40h62c13 0 6 28-4 18L35 35" />
            <path className={styles.line2} d="M0 50h70" />
            <path className={styles.line3} d="M0 60h62c13 0 6-28-4-18L35 65" />
          </svg>
        </label>
      </div>
    </div>
    
  )
}

export default HamburgerButton