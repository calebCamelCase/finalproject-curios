insert into curio (
    curio_name,
    curio_price,
    curio_description,
    date_acquired,
    in_stock,
    curio_image
)
values(
    'punklorde mentality',
    94,
    "Life is just a game — This sentence is no mere jest for hackers from the cyberworld Punklorde. They traverse the internet and use a technology known as aether editing to alter reality, making life into a great game. Occasionally, the cream of the crop among them gets to soar away from the planet and use the vast galaxy as the second stage beyond the tutorial area. This cassette tape records the story of a legendary hacker. His life began in Punklorde's underground water reservoirs and ended in the company of the Galaxy Rangers. It is said that the funeral was a quiet one, with only a game cassette silently lying atop the coffin, serving as a footnote of ""Finished the Game"" at the hacker's final rites.",
    23400522,
    4,
    'https://starrailstation.com/assets/3e032b9ea50eebb05678dda7b587882819662f37a98632024f59f39e8b39b4b0.webp'
);

update curio
set curio_image = 'https://starrailstation.com/assets/3f23912ba973864240f43fddac6282ef87095b3523a71c8ed6fc14d8ad734a93.webp'
where curio_id = 2;


/* values (
    'fruit of the alien tree',
    84,
    'this heart-shaped fruit comes from a giant tree blessed by yaoshi and is supposedly 50 amber eras old. it is unclear whether the fruit would give immortality to those who eat it, but the tree itself is definitely already an immortal abomination.',
    21450801,
    1,
    'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f5/Curio_Fruit_of_the_Alien_Tree.png/revision/latest/150?cb=20230504074656',
    

);
 */