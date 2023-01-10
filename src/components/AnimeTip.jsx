import classes from "./AnimeTip.module.scss";
const AnimeTip = (props) => {
  return (
    <div className={classes.anime_tip}>
      <div class="anime-info-box">
        <div class="anime-title">{props.anime.title}</div>

        <div>{/* <p>{props.anime.synopsis}</p> */}</div>
        <div class="info">
          <label for="anime-type">Type: </label>
          <div class="anime-type">{props.anime.type}</div>
        </div>
        <div class="info">
          <label for="anime-status">Status: </label>
          <div class="anime-status">{props.anime.status}</div>
        </div>

        <div class="info">
          <label for="anime-rating">Rating: </label>
          <div class="anime-rating">{props.anime.rating}</div>
        </div>
        <div class="info">
          <label for="anime-duration">Duration: </label>
          <div class="anime-duration">{props.anime.duration}</div>
        </div>
        <div class="info">
          <label for="anime-episodes">Episodes: </label>
          <div class="anime-episodes">{props.anime.episodes} ep</div>
        </div>
        <div class="info">
          <label for="anime-score">Score: </label>
          <div class="anime-score">{props.anime.score}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeTip;
