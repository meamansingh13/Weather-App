import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox(info){
    const INIT_URL=
    "https://unsplash.com/photos/a-foggy-picture-of-a-city-with-tall-buildings-UArWxgKpPpk"

    const HOT_URL="https://unsplash.com/photos/silhouette-of-mountains-during-golden-hour-7KrWmnpRafw";
    const COLD_URL="https://unsplash.com/photos/a-snow-covered-road-in-the-middle-of-a-forest-ZG2faW8rxDk";
    const RAiNY_URL="https://unsplash.com/photos/grayscale-photography-of-raindrops-Nw_D8v79PM4";
    
    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80?RAiNY_URL:info.temp>15?HOT_URL:COLD_URL
        }
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
        </div>
    )
}