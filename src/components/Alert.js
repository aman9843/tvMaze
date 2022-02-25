import InfoIcon from '@mui/icons-material/Info';

const Alert = ({type , message}) => {
  return (
    <div className={`alert alert-${type}`}>
     <InfoIcon></InfoIcon> {message}
    </div>
  )
}

export default Alert