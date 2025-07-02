import styles from "../styles/Linha.module.css"
import Casas from "./Casas";

export default function(props){
    return(
        <div className={styles.linha}>
            <Casas preta={props.preta}></Casas>
            <Casas preta={!props.preta}></Casas>
            <Casas preta={props.preta}></Casas>
            <Casas preta={!props.preta}></Casas>
            <Casas preta={props.preta}></Casas>
            <Casas preta={!props.preta}></Casas>
            <Casas preta={props.preta}></Casas>
            <Casas preta={!props.preta}></Casas >
        </div>
    )
}