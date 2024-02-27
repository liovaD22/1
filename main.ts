player.onItemInteracted(FEATHER, function () {
    space.randomSphere(
    [
    WOOL,
    ORANGE_WOOL,
    MAGENTA_WOOL,
    LIGHT_BLUE_WOOL,
    YELLOW_WOOL,
    LIME_WOOL,
    PINK_WOOL,
    GRAY_WOOL,
    LIGHT_GRAY_WOOL,
    CYAN_WOOL,
    PURPLE_WOOL,
    BLUE_WOOL,
    BROWN_WOOL,
    GREEN_WOOL,
    RED_WOOL,
    BLACK_WOOL
    ],
    pos(0, 0, 0),
    8,
    ShapeOperation.Replace
    )
})
player.onItemInteracted(SLIMEBALL, function () {
    space.createSolarSystem(pos(0, 0, 0))
})
