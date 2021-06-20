import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './nutrition.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div class="bob-container">
        <div class="bob-row">
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/UPHQVi.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                蘋果
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有豐富的植物性凝血素，可以增強免疫力，對防癌抗癌有重大意義。有維生素C、β-胡蘿蔔素、胡蘿蔔素、茄紅素、維生素E，使細胞不易癌化，免於受到活性氧化傷害，抑制癌細胞形成，進而預防癌症的發生。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/H5sZBw.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                柳丁
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有醣類、膳食纖維、維生素B群、維生素C、類胡蘿蔔素、鈣、磷、鉀、檸檬酸等營養素，維生素C以及類胡蘿蔔素可對抗自由基，防止細胞受到傷害。每天吃兩顆柳丁，就可吃足100毫克的維生素C建議攝取量。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/jlvNH4.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                芭樂
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有蛋白質、脂肪、醣類、維他命A、B、C,鈣、磷、鐵。以維他命C而言，比柑桔多8倍，比香蕉、木瓜、番茄(西紅柿)、西瓜、鳳梨等多數十倍，鐵、鈣、磷含量也豐富，種子中鐵的含量更勝於其它水果。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/YbRzrm.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                木瓜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" height="100">
                富含維生素A、B、B1、B2、C、葉酸、β胡蘿蔔素含量高，有多種礦物質如鐵、鈣及鉀等營養成分，世界衛生組織評為最健康的水果，也是老少咸宜的水果。有「萬壽果」的美稱，顧名思義，多吃木瓜可延年益壽。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/2EWXf3.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                水梨
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含碳水化合物、維生素E、B群、維生素B1、B2，還有少量維生素C，以及降血壓的鉀離子、鎂、磷，而梨子水分多又香甜可口，但它的熱量和脂肪含量其實很低，GI值更低於55，屬於低GI水果。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/wmXYBP.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                香蕉
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含維生素和礦物質，例如鉀，磷，鎂，維生素C和葉酸。以及酚類化合物、生物鹼、單寧、類黃酮、皂素等植化素，以每日營養需求來看，可滿足每日需求的10%左右，維生素C為16%，鉀27%、維生素B6則為41%。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/Hag1Z2.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                奇異果
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含維生素A、C、E以及鉀、鎂、纖維素外，還含有其他水果少見的成分—葉酸、胡蘿蔔素、鈣、黃體素、胺基酸、天然肌醇，是很棒的營養活力來源，奇異果中的肌醇，被發現對糖尿病患神經傳導有幫助。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
            <div class="bob-4item">
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="https://upload.cc/i1/2021/06/18/D580Me.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                葡萄
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有醣類、多種維生素A/B1/B2/B12/C/E、纖維素、脂質、卵磷脂，以及抗氧化物質等多種養分。而其糖分含量高達30％左右，主要為葡萄糖和果糖，能直接提供人體熱能。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
          
           
        </div>

    </div>
  );
}
