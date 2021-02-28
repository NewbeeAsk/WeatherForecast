import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        minWidth: 400,
        marginTop: 100,

    },
});

const WeatherTab = (props) => {
    const classes = useStyles();

    function FahrenheitToCelsius(tF) {
        return Math.round((tF-273.15)) + String.fromCharCode(176);
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {(props.data.clouds.all < 35) ?
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://i.obozrevatel.com/2019/6/29/kartinki24rusummer65.jpg"
                        title="Contemplative Reptile"
                    />
                    : (props.data.clouds.all >= 35 && props.data.clouds.all < 70) ?
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://total.kz/storage/5a/5adc4197a9f7594c1f390e6b0fe417f8_resize_w_830_h_465.jpg"
                            title="Contemplative Reptile"
                        />
                        :
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://www.total.kz/storage/07/0710d605c50d9239546d9a6a30c069d1_resize_w_830_h_465.jpg"
                            title="Contemplative Reptile"
                        />
                }
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.data.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Облачность {props.data.clouds.all}%<br />
                        Температура:<br />
                        максимальная {FahrenheitToCelsius(props.data.main.temp_max)}<br />
                        минимальная {FahrenheitToCelsius(props.data.main.temp_min)}<br />
                        чувствуються {FahrenheitToCelsius(props.data.main.feels_like)}<br />
                        Давление {Math.round(props.data.main.pressure * 0.750061683)} мм.рт.ст.<br />
                        Влажность {props.data.main.humidity}%
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default WeatherTab;
