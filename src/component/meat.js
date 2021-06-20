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
                    image="https://upload.cc/i1/2021/06/18/ZYxJsi.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                雞肉
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                每百公克含有水分74%、蛋白質22%、蛋白質2.2%、鈣13毫克、磷190毫克、鐵1.5毫克等，含有豐富的維生素A、維生素C、E等。 含脂肪量低，且所含的脂肪多為不飽和脂肪酸，為小兒、中老年人、心血管疾病患者理想的蛋白質食品。
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
                    image="https://upload.cc/i1/2021/06/18/iPKDnm.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                豬肉
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                主要含有鉀、磷、硫、鈉、鎂、鈣、鐵、鋅等。 豬內臟含有維生素A和C，特別是肝臟含維生素A、C、B5、B12較豐富。 豬肉幾乎包含了人體需要的蛋白質、脂肪、碳水化合物，各種無機鹽和維生素等，具有吸枚率高、耐饑和適口性。
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
                    image="https://upload.cc/i1/2021/06/18/0AIkdV.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                牛肉
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                含有蛋白質、脂肪、維生素A、維生素B群、鐵、鋅、鈣、胺基酸等，維生素A和維生素B群可以預防貧血，有豐富的鐵質可預防缺鐵性貧血，蛋白質、胺基酸、醣類成為生長發育時做為細胞組織所需要，是優良的高蛋白食品。
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
                    image="https://upload.cc/i1/2021/06/18/1iaRkC.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                羊肉
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" height="100">
                含有蛋白質、維生素B1、維生素B2、維生素E、鐵、鈣、磷、少數硫胺素、核黃素、尼克酸等營養素，有豐富的蛋白質、脂肪、礦物質、及維生素，容易消化，可促進血液循環，有禦寒暖身的作用，是冬季的最佳補品。
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
                    image="https://upload.cc/i1/2021/06/18/vyLxI8.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                鱸魚
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含蛋白質、魚皮又有豐富膠質，能補充營養、調理傷口、保健身體。除了富含蛋白質，還有維生素A/B/D、鈣、鎂、鋅、硒、銅等營養元素，銅能維持神經系統的正常的功能並參與數種物質代謝的關鍵酶的功能發揮，銅元素缺乏的人可食用鱸魚來補充。
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
                    image="https://upload.cc/i1/2021/06/18/Ovk8tg.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                鮭魚
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含各種蛋白質與維生素A、B、D，以及磷、鈣、鐵等礦物質，其中最有價值的物質之一是Omega-3脂肪酸，助於擺脫身體發炎，保護心血管，且抗憂鬱，預防記憶衰退，熱量低於150大卡、70 毫克的膽固醇，是維持窈窕身材的好食材。
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
                    image="https://upload.cc/i1/2021/06/18/l9I6A4.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                鯖魚
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                富含大量的維生素與礦物質，維生素D、B2、鋅、鐵質、牛磺酸、DHA、EPA等等，其中DHA跟EPA含量更僅次於鮪魚，若再加上正確搭配食材，更會有清血及抗氧化的功效。最後更重要的一點，鯖魚不僅營養豐富且價格低廉，可堪稱CP值最高的魚種。
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
                    image="https://upload.cc/i1/2021/06/18/XNud8D.jpeg"
                    itle="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                鯛魚
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                低脂肪、高蛋白、含有豐富菸鹼酸，有助維持神經系統與大腦功能健全的作用，能讓發育中的孩子知識吸收得更快；此外，鯛魚還有消除疲勞、促進血液循環、降低高血壓發生、降低血液總膽固醇以及中性脂肪，預防血栓的發生。
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card>
            </div>
        </div>
    </div>
  );
}
