import styles from '../styles/casas.module.css';

export default function Casas(props){
    return(
        <div style={{backgroundColor : props.preta ? "black" : "white"}}
        className={styles.casas}></div>
    )
}