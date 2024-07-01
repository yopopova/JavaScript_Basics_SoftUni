function seriesCalculator(input) {
    let show = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let episodeTime = Number(input[3]); // The duration of the episode without the ads.

    let ads = episodeTime * 0.2;
    let finalEpisodeTime = episodeTime + ads; // The duration of the episode with the ads.

    let specialEpisodesTime = seasons * 10;

    let totalTime = (finalEpisodeTime * episodes) * seasons + specialEpisodesTime;

    console.log(`Total time needed to watch the ${show} series is ${Math.floor(totalTime)} minutes.`);
}

seriesCalculator(["Lucifer", "3", "18", "55"]);
seriesCalculator(["Game of Thrones", "7", "10", "50"]);
seriesCalculator(["Riverdale", "3", "21", "45"]);
