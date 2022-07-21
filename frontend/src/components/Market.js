import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Imag1 from '../images/2.webp'

export default function Market() {
  return (
    <div className='toys'>
      {itemData.map((item) => {
        return(
          <div key={item._id}>
          <img className='toy' src={item.img}/>
          <p>{item.title}</p>
          <p>{item.author}</p>
          </div>
        )})}
  
    </div>
   
  );
}

const itemData = [

  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Afbeelding_van_Furby_speelgoed.jpg',
    title: 'Way-Loh	Sleep',
    author: '@bkristastucchio',
  },
  {
    img:'https://upload.wikimedia.org/wikipedia/de/thumb/7/72/Furby_mak-ffm.jpg/220px-Furby_mak-ffm.jpg',
    title: 'Fandonm',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Furby%2C_a_McDonaldsToy_circa_2001%2C_with_bright_blue_coat.jpg/220px-Furby%2C_a_McDonaldsToy_circa_2001%2C_with_bright_blue_coat.jpg',
    title: 'Pink Flamingo',
    author: '@helloimnik',
  },
  {
    img: 'https://media0.giphy.com/media/wU5QjA3in3rq7MAxyR/200w.webp?cid=ecf05e47j8h22620d4zkn8pu3p42h2a9dxamxxf7zqv4l7l1&rid=200w.webp&ct=g',
    title: 'Snowball ',
    author: '@nolanissac',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hsqhozwf6lY-4plYUYHoa8h5dfsuENCd4w&usqp=CAU',
    title: 'Gorilla',
    author: '@hjrc33',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerxPXoZ6dT_ZHlhj0bl075bdBuHH06AJZvQ&usqp=CAU',
    title: 'Snow Leopard',
    author: '@arwinneil',
  },
  {
    img: 'https://media2.giphy.com/media/YmRdjbZ3v2VbA97YgP/200w.webp?cid=ecf05e4731mb7rjli2bsi7znlebhp75cv9kwsms0dhh4289j&rid=200w.webp&ct=g',
    title: 'Marshmallow',
    author: '@tjdragotta',
  },
  {
    img: 'https://media0.giphy.com/media/WbtaBTTGtkc2A/200.webp?cid=ecf05e47j8h22620d4zkn8pu3p42h2a9dxamxxf7zqv4l7l1&rid=200.webp&ct=g',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://media3.giphy.com/media/0cyzDXJ39fOasXxHFQ/200w.webp?cid=ecf05e47ezaj90nn8s9il5z5zug7jjs46wj0nuv8cx23ecbp&rid=200w.webp&ct=g',
    title: 'yoda',
    author: '@silverdalex',
  },
  {
    img: 'https://media4.giphy.com/media/wsrEMkfDsmaoo/200.webp?cid=ecf05e47jxmh22xpo58ctribeks7a7b725qatwy4ow11cqek&rid=200.webp&ct=g',
    title: 'Panda',
    author: '@shelleypauls',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Furby_GIF.gif',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Afbeelding_van_Furby_speelgoed.jpg/398px-Afbeelding_van_Furby_speelgoed.jpg?20211130122144',
    title: 'Afbeelding van',
    author: '@southside_customs',
  },
];