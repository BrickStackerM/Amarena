ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:compressed_nitro_generator'),
        [
            'NBN',
            'BNB',
            'NBN'
        ],
        {
            N: 'powah:thermo_generator_nitro',
            B: 'powah:blazing_crystal_block'
        }
    )
    event.shaped(
        Item.of('kubejs:compressed_hellforged_parts'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'bloodmagic:hellforgedparts'
        }
    )

    event.shapeless(
        Item.of('minecraft:clay_ball', 4),
        [
            'minecraft:clay'
        ]
    )
})