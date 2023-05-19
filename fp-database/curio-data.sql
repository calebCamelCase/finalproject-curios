insert into curio (
    curio_name,
    curio_price,
    curio_description,
    date_acquired,
    in_stock,
    curio_image
)
values(
    'dimension deduction dice',
    99,
    'nine six-sided dice make up this bizarre pyramidal device. it can continuously reduce the number of dimensions it occupies and exists in the 3-dimensional world as a purely 2-dimensional entity. no one knows who created it or why.',
    22220222,
    9,
    'https://static.wikia.nocookie.net/houkai-star-rail/images/1/1d/Curio_Dimension_Reduction_Dice.png/revision/latest/150?cb=20230505005447'
);

update curio
set curio_name = 'dimension reduction dice'
where curio_id = 1;

/* values (
    'fruit of the alien tree',
    84,
    'this heart-shaped fruit comes from a giant tree blessed by yaoshi and is supposedly 50 amber eras old. it is unclear whether the fruit would give immortality to those who eat it, but the tree itself is definitely already an immortal abomination.',
    21450801,
    1,
    'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f5/Curio_Fruit_of_the_Alien_Tree.png/revision/latest/150?cb=20230504074656',
    
);
 */