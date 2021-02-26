import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/39027807?s=460&u=bf1e68cd6b60ecf06c2db2d03976cecda0b61ad7&v=4"
        alt="Ariane"
      />
      <div>
        <strong>Ariane</strong>
        <p>
          <img src="icons/level.svg" alt="Icone Level " />
          Level 1
        </p>
      </div>
    </div>
  );
}
