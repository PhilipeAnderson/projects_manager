import styles from './Container.module.css'

export function Container(props){
    return (
        <div>
            { props.children }
        </div>
    )
}