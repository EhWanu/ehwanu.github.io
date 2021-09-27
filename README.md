
# Pokemon Pokedex

This app was developed as a front-end client for an external public API that provides data about Pokemon. I used HTML, CSS, along with object-oriented JavaScript and jQuery in order to create a streamlined user interface with Bootstrap.
## Authors

- [@MalloryHyneman](https://www.github.com/mhyneman8)

  
## Tech Stack

**Client:** HTML, CSS, JavaScript, Bootstrap, jQuery

**Server:** Ajax

  
## Features

- Load Data from an External API
- View a List of Items
- On User Action, View Details for that Item
- Modal to Display Details
- Loading Indicator

  
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET https://pokeapi.co/api/v2/pokedex/{id or name}/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `name`      | `string` | The name for this resource |
| `sprites`      | `array` | A set of sprites used to depiict this Pokemon. |
| `type`      | `array` | A list of details showing types this Pokemon has. |
| `height`      | `number` | The height of this Pokemon in decimeters |
| `abilities`      | `array` | A list of abilities this Pokemon could potentially have. |





  ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Yellow | ![#ffcb05](https://via.placeholder.com/10/ffcb05?text=+) #ffcb05 |
| Mustard | ![#b3a125](https://via.placeholder.com/10/b3a125?text=+) #b3a125 |
| Blue | ![#2a75bb](https://via.placeholder.com/10/2a75bb?text=+) #2a75bb |
| Navy | ![#003a70](https://via.placeholder.com/10/003a70?text=+) #003a70 |
| Red | ![#cc0000](https://via.placeholder.com/10/cc0000?text=+) #cc0000 |

