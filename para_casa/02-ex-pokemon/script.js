const data = [
    {
        "name": "Bulbasaur",
        "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "types": ["poison", "grass"]
    },
    {
        "name": "Ivysaur",
        "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.  There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        "types": ["poison", "grass"]
    },
    {
        "name": "Venusaur",
        "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.  There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "types": ["poison", "grass"]
    },
    {
        "name": "Charmander",
        "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "types": ["fire"]
    },
    {
        "name": "Charmeleon",
        "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.  Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        "types": ["fire"]
    }
]

// FAÇA O EXERCÍCIO ABAIXO

const pokemon = () => {
    const buscaName = (data.map((item) => item))
    const buscaDescricao = (data.map((item) => item.description))
    const buscaTipo = (data.map((item) => item.types))

    console.log(buscaName)
    console.log(buscaDescricao)
    console.log(buscaTipo[0][1])
    console.log(buscaTipo[1][0])
    console.log(buscaTipo[2][1])
    console.log(buscaTipo[3][0])
    console.log(buscaTipo[4][0])


} 
pokemon()
