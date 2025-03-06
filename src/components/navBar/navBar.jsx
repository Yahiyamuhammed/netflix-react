import styles from './navBar.module.css'
export default function (){
    return (
        
        <div className={styles.nav}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <div>
                <select className={styles.select} name="" id="">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
                <button className={styles.btn}>Sign In</button>
            </div>
         
        </div>
    )
}