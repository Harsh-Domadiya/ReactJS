import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {

  // console.log(props.title, props.thumbnail)
  console.log()

  return (
    <Card sx={{
      maxWidth: 300, minWidth: 1210,
      maxHeight: 600, minHeight: 450
    }}>
      <CardActionArea>
        <CardMedia
          sx={{
            height: 250,
            width: 500,
          }}
          image={props.thumbnail}
          title="green iguana"
        />
        <CardContent>

          {props.images.map((value) => <img src={value} width="150px" height="120px" />)}

          <div>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>

            <Typography variant="h6" color=" black">
              {props.description}
            </Typography>

            <Typography variant="h6" component="div" color=" black">
              Price: {props.price} $
            </Typography>

            <Typography variant="h6" component="div" color=" black">
              Discount:{props.discountPercentage}%
            </Typography>

            <Typography variant="h6" component="div" color=" black">
              Stock:{props.stock}
            </Typography>
            <Typography variant="h6" component="div" color=" black">
              Rating:{props.rating}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}