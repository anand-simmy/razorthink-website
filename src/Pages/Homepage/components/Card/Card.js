import React from 'react'
import styles from './Card.module.scss'

const Card= ({ logoSrc, heading, info }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.logo}>
                <img alt='rzt-pipeline' src={logoSrc} />
            </div>
            <div className={styles.heading}>
                {heading}
            </div>
            <div className={styles.info}>
                {info}
            </div>
        </div>
    )
}

export default Card