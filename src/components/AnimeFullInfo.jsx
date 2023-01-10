import classes from "./AnimeFullInfo.module.scss";
const AnimeFullInfo = (props) => {
  return (
    <div className={classes.anime_box}>
      <div className={classes.short_info_box}>
        <div className={classes.anime_title_mobile}>{props.anime.title}</div>
        <div className={classes.img}>
          <img src={props.anime.images?.jpg.image_url} alt="" />
        </div>
        <div className={classes.anime_info_box}>
          <div className={classes.anime_title_pc}>{props.anime.title}</div>

          <div className={classes.info}>
            <div>Type: {props.anime.type}</div>
          </div>
          <div className={classes.info}>
            <div>Status: {props.anime.status}</div>
          </div>

          <div className={classes.info}>
            <div>Score: {props.anime.score}</div>
          </div>

          <div className={classes.info}>
            <div>Rating: {props.anime.rating}</div>
          </div>
          <div className={classes.info}>
            <div>Duration: {props.anime.duration}</div>
          </div>
          <div className={classes.info}>
            <div>Episodes: {props.anime.episodes} ep</div>
          </div>
        </div>
      </div>
      <div className={classes.synopsis}>
        <h2>Synopsis</h2>
        <p>{props.anime.synopsis}</p>
      </div>
      <embed
        className={classes.video}
        src={props.anime?.trailer?.embed_url}
      ></embed>
    </div>
  );
};

export default AnimeFullInfo;
