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
                    image="https://upload.cc/i1/2021/06/18/ik0EBQ.jpg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                菠菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                通常100公克菠菜中含有蛋白質12公克、脂肪1.5公克、碳水化合物21.5公克、食物纖維2.45公克、鈣515毫克、磷190毫克、鐵9.5毫克、維他命A  3毫克、維他命C  190毫克、維他命B1  0.1毫克、維他命B2  0.7毫克的參考值，以及36毫克的胡蘿蔔素。
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
                    image="https://upload.cc/i1/2021/06/18/QDhxmq.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                青江菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                每100克的青江菜含有225毫克的鉀、102毫克的鈣、β-胡蘿蔔素則含793微克。不只鈣含量高，它含有的硫化物也是抗氧化的好幫手；以中醫看來，青江菜還具有清熱效果，能夠幫助緩解便秘、火氣大的症狀，生津又解渴。
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
                    image="https://upload.cc/i1/2021/06/18/NYEDM3.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                莧菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                莧菜的主要營養成分有蛋白質、胡蘿葡素、鐵、鈣、鋅、維生素C及膳食纖維等，是很好的食療蔬菜。 莧菜的鐵、鈣的含量高於菠菜，不但補血，而且不含草酸很容易吸收，對牙齒和骨骼的生長都有幫助，適合老人、小孩或貧血、骨折修復者食用。
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
                    image="https://upload.cc/i1/2021/06/18/1BVxdv.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                空心菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" height="100">
                富含碳水化合物、脂肪、蛋白質，以及多種礦物質維生素，由纖維素、半纖維素、木質素、膠漿及果膠組成的粗纖維素，能夠重整腸道環境，改善便秘，排出體內毒素可促進腸胃蠕動，改善便秘、降低膽固醇，對防癌有益。
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
                    image="https://upload.cc/i1/2021/06/18/yMPI36.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                大白菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含維生素C、鉀、鈣、鎂以及膳食纖維等各種營養，維生素C是提高免疫力及對抗壓力十分重要的維生素，鉀能排出體內的鈉幫助預防高血壓，膳食纖維則能夠幫助整腸，改善便秘排出體內囤積毒素。
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
                    image="https://upload.cc/i1/2021/06/18/ik0EBQ.jpg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                高麗菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有維生素B群、維生素C、維生素K、維生素U、鈣、磷、鉀、有機酸、膳食纖維等營養素。 高麗菜含有豐富的人體必需微量元素，其中鈣、鐵、磷的含量在各類蔬菜中名列前五名，又以鈣的含量最為豐富。
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
                    image="https://upload.cc/i1/2021/06/18/QU6YB3.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                青花菜
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                除含維他命A、B、B2及維他命c外，尚含蛋白質、脂肪、碳水化合物、鈣、磷、鐵、β胡蘿蔔素等。 其中維他命C含量豐富，為檸檬的3.5倍，及蘋果的26倍；含有礦物質銅、錳、鉻、鉀和碘。
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
                    image="https://upload.cc/i1/2021/06/18/4mH2tY.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                青椒
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                青椒含有B群維生素、維生素C、維生素E、維生素K、胡蘿蔔素、鈣、磷、鉀等營養素，具有促進消化，加快脂肪代謝等功效。青椒水分含量高、熱量低，其維生素C的含量是番茄的3.5 倍，在蔬菜中居首。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    </div>
  );
}
