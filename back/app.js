const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors())

// Preparamos la ruta, OJO: no es '/' sola
app.get('/pokemon/:pokemonName', async (req, res) => {
    const pokemonName = req.params.pokemonName
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    try {
        const response = await axios.get(url)
        const { name, sprites: { front_default }, height, weight } = response.data

        res.json({ name, sprites: { front_default }, height, weight })

    } catch (error) {
        res.status(404).json({ error: 'Pokemon no encontrado' })
    }
})

app.listen(3002, () => {
    console.log('Express está escuchando en el puero http://localhost:3002')
})