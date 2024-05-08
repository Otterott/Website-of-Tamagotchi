import styles from './styles/Photo.module.css';

function Photo(props){
    return(<div className={styles.image}>
        <img width="500" src={props.image}/>
            <div>{props.bag}</div>
        </div>)
}

export default Photo;

