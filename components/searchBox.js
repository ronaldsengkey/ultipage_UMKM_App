import { 
    makeStyles,} from '@material-ui/core/styles';
    import TextField from '@material-ui/core/TextField';
import { FaSearch } from 'react-icons/fa';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStylesReddit = makeStyles((theme) => ({
    root: {
        paddingTop:'5px',
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#EFEFEF',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#EFEFEF',
      },
      width: '90vw',
      height:'40px'
      
    },
    form: {    textAlign: 'center',
    marginTop:'20px'
    },
    searchIcon: {    marginLeft:'15px',
marginRight:'15px',
color:'#9B9B9B'
    },
  }));  


  export default function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <form className={classes.form}><TextField className={classes.root} onKeyPress={(ev) => {
      console.log(`Pressed keyCode ${ev.key}`);
      
      if (ev.key === 'Enter') {
        ev.preventDefault();
        props.onEnter(ev.target.value);
        
        // console.log(ev.target.value);
      }
    }} InputProps={{disableUnderline: true,startAdornment: <InputAdornment position="start"><FaSearch className={classes.searchIcon}/></InputAdornment>,}} {...props} placeholder="Ketik untuk memulai pencarian"/></form>;
  }