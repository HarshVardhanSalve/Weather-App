import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    // Set image URL based on weather condition
    let imageUrl = "";

  if (info.humidity > 80) {
    // Thunderstorm condition
    imageUrl = "https://images.unsplash.com/photo-1593642532973-d31b6557fa68";
} else if (info.temp > 15) {
    // Sunny condition
    imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
} else {
    // Cold condition
    imageUrl = "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5";
}


    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 380 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {
                                info.humidity > 80 ? <ThunderstormIcon /> :
                                info.temp > 15 ? <SunnyIcon /> :
                                <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature : {info.temp}°C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Max Temp : {info.tempMax}</p>
                            <p>Min Temp : {info.tempMin}</p>
                            <p>The weather feels like <i>{info.weather}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
