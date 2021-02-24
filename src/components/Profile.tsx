import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/dayellesouza.png" alt="Dayelle Souza" />
            <div>
                <strong>Dayelle Souza</strong>
                <p>
                    <img src="icons/Level.svg" alt="Level" />
                    Level 1
                    </p>
            </div>
        </div>

    );
}