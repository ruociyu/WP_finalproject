import Button from '@material-ui/core/Button';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText=event.target.innerText+"超健康！"
}

const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i)
        output.push(<Button variant="contained" color="primary"
                    onClick={changeText}>星期{i}健康了嗎？</Button>)
    return output;
}

export default MultiButton;