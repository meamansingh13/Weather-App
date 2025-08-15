import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Infobox(){
    const INIT_URL=
    "https://unsplash.com/photos/a-foggy-picture-of-a-city-with-tall-buildings-UArWxgKpPpk"
    let info={
        city:,
        feelslike:,
        temp:,
        tempMin:,
        tempMax:,
        humidity:
    };
    return(
        <div>
            <h1>Weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
          <div>
            <p>Temprature={info.temp}</p>
            <p>Weather={info.feelslike}</p>
            <p>Minimum Temprature={info.tempMin}</p>
            <p>Maximum Temprature={info.tempMax}</p>
            <p>Humidity={info.humidity}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}