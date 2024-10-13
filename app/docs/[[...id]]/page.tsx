import styles from './style.module.css'


export default function DocsIdPage({params}) {
  console.log("params: ", params)
    return (
      <div className={styles.title}>
        id {params.id}
   
      </div>
    )
  }
  