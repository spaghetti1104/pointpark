//TV Shows objects
var tvShow = {
    name: "Bojack Horseman",
    yearAired: 2014,
    yearEnded: 2020,
    creator: "Raphael Bob-Waksberg",
    seasons: 6,
    actors: "Will Arnett, Aaron Paul",
    actress: "Alison Brie, Amy Sedaris",
    imdbRating: 8.8,
    genres: "Animation, Comedy, Drama",
    certification: "TV-MA",
};
//images
document.write("<img src='./images/bh1.webp' width=400 height=300");
//Write code to screen
document.write("<br>");
document.write("<br>");
document.write("<b><font size=8>");
document.write(tvShow.name);
document.write("<br></b></font size>");
document.write("<font size = 5>");
document.write("The show aired in " + tvShow.yearAired + " and ended in " + tvShow.yearEnded);
document.write("<br>");
document.write("The creator of the show is " + tvShow.creator);
document.write("<br>");
document.write("The show has " + tvShow.seasons + " seasons");
document.write("<br>");
document.write("The actors in the show are " + tvShow.actors);
document.write("<br>");
document.write("The actress in the show are " + tvShow.actress);
document.write("<br>");
document.write("This show has an imdb rating of " + tvShow.imdbRating);
document.write("<br>");
document.write("The genres of the show are: " + tvShow.genres);
document.write("<br>");
document.write("This show has a certification of: " + tvShow.certification);
